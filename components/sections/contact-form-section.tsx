"use client";

import { t } from "@/lib/i18n";
import { type LocaleProps } from "@/lib/i18n/routing";

import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { serviceOptions } from "@/lib/site-data";

import { contactLimits, emptyContactForm, validateContactForm, type ContactFormData, type FormErrors } from "@/lib/contact-form";

export function ContactFormSection({ locale = "pt" }: LocaleProps) {
  const [formData, setFormData] = useState<ContactFormData>(emptyContactForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [website, setWebsite] = useState("");

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof ContactFormData];
        return next;
      });
    }
  }

  function handleBlur() {
    const nextErrors = validateContactForm(formData);
    setErrors(nextErrors);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContactForm(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, locale, website })
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) {
        if (response.status === 422 && result.errors) setErrors(result.errors);
        setSubmitError(response.status === 429
          ? "Fez demasiados pedidos. Aguarde alguns minutos antes de tentar novamente."
          : "Não foi possível confirmar o envio. Os seus dados foram mantidos. Pode tentar novamente ou contactar-nos por email.");
        return;
      }
      setIsSuccess(true);
      setFormData(emptyContactForm);
      setWebsite("");
      setErrors({});
    } catch {
      setSubmitError("Não foi possível confirmar o envio. Os seus dados foram mantidos. Pode tentar novamente ou contactar-nos por email.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputBaseClass =
    "mt-1 w-full rounded-xl border bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500";

  return (
    <section id="contacto" className="section-block section-pattern border-t border-slate-200/80 bg-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionTitle
            eyebrow={t(locale, "Contacto")}
            title={t(locale, "Fale connosco e receba um plano claro para crescer online")}
            description={t(locale, "Conte-nos um pouco sobre o seu negócio. Vamos analisar a sua presença online e indicar os próximos passos com clareza.")}
          />

          <div className="mt-8 space-y-3 text-slate-600">
            <p>Email: <a href="mailto:geral@digitalmax.pt" className="underline">geral@digitalmax.pt</a></p>
            <p>Portugal</p>
          </div>

          <div className="mt-8 space-y-3 rounded-2xl border border-slate-200 bg-slate-50/90 p-5 text-sm text-slate-700">
            <p className="inline-flex items-center gap-2 font-semibold text-slate-900">
              <ShieldCheck className="h-4 w-4 text-cyan-700" aria-hidden="true" />
              {t(locale, "O que pode esperar")}
            </p>
            <p>{t(locale, "Resposta em até 1 dia útil.")}</p>
            <p>{t(locale, "Análise inicial sem compromisso.")}</p>
            <p>{t(locale, "Orientação clara, sem linguagem técnica desnecessária.")}</p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5 shadow-[0_14px_34px_rgba(15,23,42,0.08)] sm:p-7">
          {isSuccess ? (
            <div role="status" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-900">
              <p className="inline-flex items-center gap-2 text-base font-semibold">
                <CheckCircle2 className="h-5 w-5" />
                {t(locale, "Pedido enviado com sucesso")}
              </p>
              <p className="mt-2 text-sm">
                {t(locale, "Obrigado pelo contacto. Em breve iremos falar consigo para entender melhor o seu negócio.")}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="inline-flex items-center rounded-full border border-emerald-300 bg-white px-4 py-2 text-sm font-semibold text-emerald-900 hover:bg-emerald-100"
                >
                  {t(locale, "Enviar novo pedido")}
                </button>
              </div>
            </div>
          ) : (
            <form noValidate onSubmit={handleSubmit} aria-busy={isSubmitting} className="scroll-mt-24">
              <div className="hidden" aria-hidden="true">
                <label>
                  Website
                  <input name="website" value={website} onChange={(event) => setWebsite(event.target.value)} tabIndex={-1} autoComplete="off" />
                </label>
              </div>
              <fieldset disabled={isSubmitting}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium text-slate-700">
                  {t(locale, "Nome")}
                  <input
                    type="text"
                    name="name"
                    maxLength={contactLimits.name}
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={t(locale, "Como se chama?")}
                    aria-invalid={Boolean(errors.name)}
                    className={`${inputBaseClass} ${errors.name ? "border-rose-400" : "border-slate-300"}`}
                  />
                  {errors.name ? <span className="mt-1 block text-xs text-rose-600">{t(locale, errors.name)}</span> : null}
                </label>

                <label className="text-sm font-medium text-slate-700">
                  {t(locale, "Empresa")}
                  <input
                    type="text"
                    name="company"
                    maxLength={contactLimits.company}
                    value={formData.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={t(locale, "Nome do negócio")}
                    aria-invalid={Boolean(errors.company)}
                    className={`${inputBaseClass} ${errors.company ? "border-rose-400" : "border-slate-300"}`}
                  />
                  {errors.company ? <span className="mt-1 block text-xs text-rose-600">{t(locale, errors.company)}</span> : null}
                </label>

                <label className="text-sm font-medium text-slate-700">
                  Email
                  <input
                    type="email"
                    name="email"
                    maxLength={contactLimits.email}
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={t(locale, "nome@empresa.pt")}
                    aria-invalid={Boolean(errors.email)}
                    className={`${inputBaseClass} ${errors.email ? "border-rose-400" : "border-slate-300"}`}
                  />
                  {errors.email ? <span className="mt-1 block text-xs text-rose-600">{t(locale, errors.email)}</span> : null}
                </label>

                <label className="text-sm font-medium text-slate-700">
                  {t(locale, "Telefone")}
                  <input
                    type="tel"
                    name="phone"
                    maxLength={contactLimits.phone}
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={t(locale, "Número de contacto")}
                    aria-invalid={Boolean(errors.phone)}
                    className={`${inputBaseClass} ${errors.phone ? "border-rose-400" : "border-slate-300"}`}
                  />
                  {errors.phone ? <span className="mt-1 block text-xs text-rose-600">{t(locale, errors.phone)}</span> : null}
                </label>
              </div>

              <label className="mt-4 block text-sm font-medium text-slate-700">
                {t(locale, "Serviço pretendido")}
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(errors.service)}
                  className={`${inputBaseClass} ${errors.service ? "border-rose-400" : "border-slate-300"}`}
                >
                  <option value="" disabled>
                    {t(locale, "Escolha um serviço")}
                  </option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {t(locale, option)}
                    </option>
                  ))}
                </select>
                {errors.service ? <span className="mt-1 block text-xs text-rose-600">{t(locale, errors.service)}</span> : null}
              </label>

              <label className="mt-4 block text-sm font-medium text-slate-700">
                {t(locale, "Mensagem")}
                <textarea
                  name="message"
                    maxLength={contactLimits.message}
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t(locale, "Explique brevemente os seus objetivos para recebermos uma orientação mais útil.")}
                  aria-invalid={Boolean(errors.message)}
                  className={`${inputBaseClass} ${errors.message ? "border-rose-400" : "border-slate-300"}`}
                />
                {errors.message ? <span className="mt-1 block text-xs text-rose-600">{t(locale, errors.message)}</span> : null}
              </label>

              <div className="mt-3 text-xs text-slate-500">
                {t(locale, "Ao enviar, está a pedir um contacto inicial sem compromisso para avaliarmos o seu caso.")}
              </div>

              {submitError ? (
                <p role="alert" className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-800">
                  {t(locale, submitError)}{" "}
                  <a href="mailto:geral@digitalmax.pt" className="underline">geral@digitalmax.pt</a>
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {isSubmitting ? t(locale, "A enviar...") : t(locale, "Pedir diagnóstico gratuito")}
                <ArrowRight className="h-4 w-4" />
              </button>

              {hasErrors ? <p className="mt-3 text-xs text-rose-600">{t(locale, "Verifique os campos assinalados antes de enviar.")}</p> : null}
              </fieldset>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

