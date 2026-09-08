import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const testDirectory = path.dirname(fileURLToPath(import.meta.url));

// Compile the small, dependency-free handler graph for Node's built-in test runner.
const modules = new Map();
function load(relative) {
  const filename = path.resolve(testDirectory, relative);
  if (modules.has(filename)) return modules.get(filename).exports;
  const compiledModule = { exports: {} };
  modules.set(filename, compiledModule);
  const { outputText } = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 }
  });
  new Function('require', 'module', 'exports', outputText)(
    name => load(path.resolve(path.dirname(filename), name + '.ts')),
    compiledModule, compiledModule.exports
  );
  return compiledModule.exports;
}
const { createContactHandler } = load('../lib/server/contact-handler.ts');
const valid = {
  name: 'Test Visitor', company: 'Example Business', email: 'visitor@example.com', phone: '+351 910 000 000',
  service: 'Criação de website', message: 'Please contact me about a website.', locale: 'en', website: ''
};
function request(data = valid, headers = {}) {
  return new Request('https://digitalmax.pt/api/contact', {
    method: 'POST', headers: { 'Content-Type': 'application/json', Origin: 'https://digitalmax.pt', ...headers },
    body: JSON.stringify(data)
  });
}
function setup(overrides = {}) {
  const calls = [];
  const handler = createContactHandler({
    token: () => 'test-token', mailbox: () => 'test-mailbox',
    fetch: async (url, init) => { calls.push({ url, init }); return new Response(null, { status: 204 }); },
    ...overrides
  });
  return { handler, calls };
}
test('delivers plain text only to the configured business mailbox after valid input', async () => {
  const { handler, calls } = setup();
  const response = await handler(request({ ...valid, to: ['attacker@example.com'], subject: 'override', message: '<script>alert(1)</script>' }));
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, 'https://api.mail.hostinger.com/api/v1/mailboxes/test-mailbox/send');
  const body = JSON.parse(calls[0].init.body);
  assert.deepEqual(body.to, ['geral@digitalmax.pt']);
  assert.equal(body.html, undefined);
  assert.ok(body.text.includes('visitor@example.com'));
  assert.ok(body.text.includes('Inglês'));
  assert.ok(body.subject.startsWith('Novo pedido de diagnóstico'));
});
test('validates missing fields, types, service choices, email and header injection on the server', async () => {
  for (const data of [{}, { ...valid, name: {} }, { ...valid, email: 'invalid' }, { ...valid, company: 'one\r\nBcc: other@example.com' }, { ...valid, service: 'unknown' }, { ...valid, message: ' ' }, { ...valid, name: 'x'.repeat(121) }, { ...valid, locale: 'fr' }]) {
    const { handler, calls } = setup();
    assert.ok([400, 422].includes((await handler(request(data))).status));
    assert.equal(calls.length, 0);
  }
});
test('rejects cross-origin submissions and filled honeypots without sending', async () => {
  const { handler, calls } = setup();
  assert.equal((await handler(request(valid, { Origin: 'https://attacker.example' }))).status, 403);
  assert.equal((await handler(request({ ...valid, website: 'spam.example' }))).status, 400);
  assert.equal(calls.length, 0);
});
test('rejects malformed JSON, unsupported content types and large bodies without Content-Length', async () => {
  const { handler, calls } = setup();
  assert.equal((await handler(request(valid, { 'Content-Type': 'text/plain' }))).status, 415);
  assert.equal((await handler(new Request('https://digitalmax.pt/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{bad' }))).status, 400);
  assert.equal((await handler(request({ ...valid, message: 'x'.repeat(25_000) }))).status, 413);
  assert.equal(calls.length, 0);
});
test('does not report success or expose credentials on provider errors or timeouts', async () => {
  for (const fetch of [async () => new Response('sensitive provider detail', { status: 401 }), async () => new Response('{}', { status: 200 }), async () => { throw new Error('test-token'); }]) {
    const { handler } = setup({ fetch });
    const response = await handler(request());
    assert.equal(response.status, 502);
    assert.deepEqual(await response.json(), { error: 'delivery_failed' });
  }
});
test('fails safely when production credentials are missing', async () => {
  const { handler, calls } = setup({ token: () => undefined });
  assert.equal((await handler(request())).status, 503);
  assert.equal(calls.length, 0);
});
test('limits repeated requests and allows another attempt after the window expires', async () => {
  let now = 0;
  const { handler, calls } = setup({ now: () => now });
  for (let i = 0; i < 5; i++) assert.equal((await handler(request())).status, 200);
  const blocked = await handler(request());
  assert.equal(blocked.status, 429);
  assert.equal(blocked.headers.get('Retry-After'), '600');
  assert.equal(calls.length, 5);
  now = 600_001;
  assert.equal((await handler(request())).status, 200);
});
