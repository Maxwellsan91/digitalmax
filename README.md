# Digital Max

Landing page institucional da **Digital Max**, preparada para captação de contactos e crescimento orgânico em Google.

## Sobre o Projeto

A Digital Max é uma agência digital em Portugal focada em websites, redes sociais, tráfego pago e SEO local para pequenos e médios negócios.

## Tecnologias usadas

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (ícones)

## Instalar dependências

```bash
npm install
```

## Executar localmente

```bash
npm run dev
```

A aplicação fica disponível em `http://localhost:3000`.

## Build de produção

```bash
npm run build
npm run start
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Publicar na Vercel

1. Suba o projeto para um repositório Git (GitHub, GitLab ou Bitbucket).
2. Entre em `vercel.com` e clique em **Add New Project**.
3. Importe o repositório da Digital Max.
4. Mantenha as configurações padrão para Next.js.
5. Clique em **Deploy**.
6. (Opcional) Configure domínio personalizado em **Project Settings > Domains**.

## Estrutura principal

```text
app/
  globals.css
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  brand/
  cards/
  layout/
  sections/
  seo/
  ui/
lib/
  contact.ts
  site-data.ts
public/
  favicon.svg
  og-image.svg
```

## Onde alterar domínio, email e telefone

- **Domínio:** `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`, `components/seo/structured-data.tsx`
- **Email:** `components/sections/contact-form-section.tsx`, `components/layout/site-footer.tsx`, `components/seo/structured-data.tsx`
- **Telefone/WhatsApp:** `lib/contact.ts`, `components/seo/structured-data.tsx`

## Onde alterar textos e serviços

- **Copy das secções:** `components/sections/*.tsx`
- **Serviços, planos, passos, navegação, FAQ e métricas:** `lib/site-data.ts`

## Arquitetura SEO recomendada (evolução)

- `/`
- `/servicos`
- `/servicos/criacao-de-sites`
- `/servicos/landing-pages`
- `/servicos/gestao-redes-sociais`
- `/servicos/trafego-pago`
- `/servicos/seo-local`
- `/sobre`
- `/contacto`
- `/blog`
- `/blog/[slug]`

## Sitemap e robots em ambiente local

Com o servidor em execução (`npm run dev`), testar:

```bash
http://localhost:3000/sitemap.xml
http://localhost:3000/robots.txt
```

## Checklist SEO pós-publicação

- [ ] Configurar domínio principal
- [ ] Garantir redirecionamento www/non-www
- [ ] Garantir HTTPS
- [ ] Submeter sitemap no Google Search Console
- [ ] Validar `robots.txt`
- [ ] Validar `sitemap.xml`
- [ ] Testar Core Web Vitals/PageSpeed
- [ ] Criar Google Business Profile
- [ ] Configurar Google Analytics 4
- [ ] Configurar Google Search Console
- [ ] Verificar indexação de páginas
- [ ] Criar primeiros conteúdos de blog
- [ ] Criar páginas individuais de serviço
- [ ] Rever titles e descriptions após primeiros dados
- [ ] Configurar formulário real
- [ ] Configurar eventos de conversão

## Estratégia inicial de conteúdo SEO (blog)

### 1) Quanto custa criar um site profissional em Portugal?
- **Keyword principal:** custo de criação de site em Portugal
- **Intenção:** informacional/comercial
- **Título SEO:** Quanto custa criar um site profissional em Portugal? Guia para pequenos negócios
- **Descrição SEO:** Entenda os fatores que influenciam o investimento num site profissional em Portugal e como escolher a solução certa para o seu negócio.
- **Estrutura H2/H3:**
  - H2: O que influencia o preço de um website
  - H2: Diferença entre site simples e site estratégico
  - H2: Como avaliar propostas sem olhar só para o preço
  - H3: Design, estrutura, SEO e manutenção

### 2) Como um website pode ajudar pequenos negócios a conseguir mais clientes
- **Keyword principal:** website para pequenos negócios
- **Intenção:** informacional
- **Título SEO:** Como um website ajuda pequenos negócios a conseguir mais clientes
- **Descrição SEO:** Descubra como um website bem estruturado melhora confiança, visibilidade e pedidos de contacto para pequenas empresas.
- **Estrutura H2/H3:**
  - H2: O que o cliente procura num site
  - H2: Elementos que aumentam pedidos de contacto
  - H2: Erros comuns que afastam clientes

### 3) O que é SEO local e porque é importante para negócios em Portugal
- **Keyword principal:** SEO local em Portugal
- **Intenção:** informacional
- **Título SEO:** O que é SEO local e porque é importante para negócios em Portugal
- **Descrição SEO:** Saiba como o SEO local ajuda empresas a aparecer melhor no Google e a atrair clientes da sua zona.
- **Estrutura H2/H3:**
  - H2: O que é SEO local
  - H2: Como o Google decide resultados locais
  - H2: Primeiros passos para melhorar visibilidade

### 4) Site ou redes sociais: por onde deve começar o seu negócio?
- **Keyword principal:** site ou redes sociais
- **Intenção:** comparativa
- **Título SEO:** Site ou redes sociais: por onde deve começar o seu negócio?
- **Descrição SEO:** Compare website e redes sociais e veja qual deve ser a prioridade para captar clientes com mais consistência.
- **Estrutura H2/H3:**
  - H2: Vantagens de cada canal
  - H2: Quando começar pelo website
  - H2: Quando reforçar redes sociais

### 5) Como melhorar a presença online de um restaurante
- **Keyword principal:** presença online restaurante
- **Intenção:** informacional
- **Título SEO:** Como melhorar a presença online de um restaurante em Portugal
- **Descrição SEO:** Estratégias práticas para restaurantes aparecerem melhor no Google, redes sociais e converterem visitas em reservas.
- **Estrutura H2/H3:**
  - H2: Base digital para restauração
  - H2: Google Business Profile para restaurantes
  - H2: Conteúdo que gera reservas

### 6) Gestão de redes sociais para pequenos negócios: o que publicar?
- **Keyword principal:** gestão de redes sociais para empresas
- **Intenção:** informacional
- **Título SEO:** Gestão de redes sociais para pequenos negócios: o que publicar?
- **Descrição SEO:** Planeie conteúdos úteis, consistentes e comerciais para manter presença ativa e gerar mais contactos.
- **Estrutura H2/H3:**
  - H2: Tipos de conteúdo que funcionam
  - H2: Frequência recomendada
  - H2: Como transformar conteúdo em contacto

### 7) Landing page: o que é e quando usar
- **Keyword principal:** landing page para negócios
- **Intenção:** informacional/comercial
- **Título SEO:** Landing page: o que é, quando usar e como gerar mais leads
- **Descrição SEO:** Entenda quando usar landing pages para campanhas e como melhorar taxa de conversão com uma oferta clara.
- **Estrutura H2/H3:**
  - H2: Diferença entre website e landing page
  - H2: Estrutura ideal de uma landing
  - H2: Erros comuns de conversão

### 8) Tráfego pago para negócios locais: vale a pena?
- **Keyword principal:** tráfego pago para pequenos negócios
- **Intenção:** informacional/comercial
- **Título SEO:** Tráfego pago para negócios locais: vale a pena investir?
- **Descrição SEO:** Veja quando anúncios em Meta Ads e Google Ads fazem sentido e como evitar desperdício de orçamento.
- **Estrutura H2/H3:**
  - H2: O que esperar de campanhas pagas
  - H2: Quando começar e com que objetivo
  - H2: Indicadores para acompanhar

### 9) Como aparecer melhor no Google em Portugal
- **Keyword principal:** aparecer no Google em Portugal
- **Intenção:** informacional
- **Título SEO:** Como aparecer melhor no Google em Portugal: guia prático
- **Descrição SEO:** Melhore presença digital com ações práticas de SEO local, conteúdo e estrutura de website.
- **Estrutura H2/H3:**
  - H2: Base técnica mínima
  - H2: Conteúdo alinhado com pesquisa
  - H2: Autoridade e consistência local

### 10) Erros comuns que fazem negócios perder clientes online
- **Keyword principal:** erros presença digital
- **Intenção:** informacional
- **Título SEO:** 10 erros que fazem negócios perder clientes online
- **Descrição SEO:** Identifique falhas comuns em websites, redes sociais e presença local que reduzem contactos e vendas.
- **Estrutura H2/H3:**
  - H2: Erros de posicionamento
  - H2: Erros de usabilidade e contacto
  - H2: Erros de consistência e acompanhamento

## Próximos passos para ganhar tráfego orgânico

1. Publicar páginas individuais de serviço com conteúdo específico.
2. Criar calendário editorial mensal para o blog (2 a 4 artigos/mês).
3. Reforçar SEO local (Google Business Profile + páginas orientadas por serviço).
4. Medir desempenho em Search Console (consultas, CTR, páginas com impressões).
5. Atualizar conteúdos trimestralmente com base em dados reais.
