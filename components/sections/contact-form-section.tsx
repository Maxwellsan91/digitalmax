"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { serviceOptions } from "@/lib/site-data";
import { WHATSAPP_LINK } from "@/lib/contact";

type ContactFormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const initialData: ContactFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: ""
};

function validateForm(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) errors.name = "Indique o seu nome.";
  if (!data.company.trim()) errors.company = "Indique o nome do negócio.";
  if (!data.email.trim()) errors.email = "Indique o seu email.";
  if (data.email.trim() && !/^\S+@\S+\.\S+$/.test(data.email)) errors.email = "Introduza um email válido.";
  if (!data.phone.trim()) errors.phone = "Indique o seu telefone.";
  if (!data.service.trim()) errors.service = "Escolha o serviço pretendido.";
  if (!data.message.trim()) errors.message = "Escreva uma mensagem curta com o seu objetivo.";

  return errors;
}

export function ContactFormSection() {
  const [formData, setFormData] = useState<ContactFormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
    const nextErrors = validateForm(formData);
    setErrors(nextErrors);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateForm(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);

    // Preparado para integrar com API Route, Formspree ou Resend.
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData(initialData);
  }

  const inputBaseClass =
    "mt-1 w-full rounded-xl border bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500";

  return (
    <section id="contacto" className="section-block section-pattern border-t border-slate-200/80 bg-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionTitle
            eyebrow="Contacto"
            title="Fale connosco e receba um plano claro para crescer online"
            description="Conte-nos um pouco sobre o seu negócio. Vamos analisar a sua presença online e indicar os próximos passos com clareza."
          />

          <div className="mt-8 space-y-3 text-slate-600">
            <p>Email: geral@digitalmax.pt</p>
            <p>Portugal</p>
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir conversa no WhatsApp com mensagem pré-preenchida"
              className="inline-flex items-center gap-2 font-semibold text-cyan-700 transition-colors hover:text-cyan-800"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </Link>
          </div>

          <div className="mt-8 space-y-3 rounded-2xl border border-slate-200 bg-slate-50/90 p-5 text-sm text-slate-700">
            <p className="inline-flex items-center gap-2 font-semibold text-slate-900">
              <ShieldCheck className="h-4 w-4 text-cyan-700" aria-hidden="true" />
              O que pode esperar
            </p>
            <p>Resposta em até 1 dia útil.</p>
            <p>Análise inicial sem compromisso.</p>
            <p>Orientação clara, sem linguagem técnica desnecessária.</p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5 shadow-[0_14px_34px_rgba(15,23,42,0.08)] sm:p-7">
          {isSuccess ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-900">
              <p className="inline-flex items-center gap-2 text-base font-semibold">
                <CheckCircle2 className="h-5 w-5" />
                Pedido enviado com sucesso (simulação)
              </p>
              <p className="mt-2 text-sm">
                Obrigado pelo contacto. Em breve iremos falar consigo para entender melhor o seu negócio.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="inline-flex items-center rounded-full border border-emerald-300 bg-white px-4 py-2 text-sm font-semibold text-emerald-900 hover:bg-emerald-100"
                >
                  Enviar novo pedido
                </button>
                <Link
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
                >
                  Falar no WhatsApp
                </Link>
              </div>
            </div>
          ) : (
            <form noValidate onSubmit={handleSubmit} className="scroll-mt-24">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium text-slate-700">
                  Nome
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Como se chama?"
                    aria-invalid={Boolean(errors.name)}
                    className={`${inputBaseClass} ${errors.name ? "border-rose-400" : "border-slate-300"}`}
                  />
                  {errors.name ? <span className="mt-1 block text-xs text-rose-600">{errors.name}</span> : null}
                </label>

                <label className="text-sm font-medium text-slate-700">
                  Empresa
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Nome do negócio"
                    aria-invalid={Boolean(errors.company)}
                    className={`${inputBaseClass} ${errors.company ? "border-rose-400" : "border-slate-300"}`}
                  />
                  {errors.company ? <span className="mt-1 block text-xs text-rose-600">{errors.company}</span> : null}
                </label>

                <label className="text-sm font-medium text-slate-700">
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="nome@empresa.pt"
                    aria-invalid={Boolean(errors.email)}
                    className={`${inputBaseClass} ${errors.email ? "border-rose-400" : "border-slate-300"}`}
                  />
                  {errors.email ? <span className="mt-1 block text-xs text-rose-600">{errors.email}</span> : null}
                </label>

                <label className="text-sm font-medium text-slate-700">
                  Telefone
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Número de contacto"
                    aria-invalid={Boolean(errors.phone)}
                    className={`${inputBaseClass} ${errors.phone ? "border-rose-400" : "border-slate-300"}`}
                  />
                  {errors.phone ? <span className="mt-1 block text-xs text-rose-600">{errors.phone}</span> : null}
                </label>
              </div>

              <label className="mt-4 block text-sm font-medium text-slate-700">
                Serviço pretendido
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(errors.service)}
                  className={`${inputBaseClass} ${errors.service ? "border-rose-400" : "border-slate-300"}`}
                >
                  <option value="" disabled>
                    Escolha um serviço
                  </option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.service ? <span className="mt-1 block text-xs text-rose-600">{errors.service}</span> : null}
              </label>

              <label className="mt-4 block text-sm font-medium text-slate-700">
                Mensagem
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Explique brevemente os seus objetivos para recebermos uma orientação mais útil."
                  aria-invalid={Boolean(errors.message)}
                  className={`${inputBaseClass} ${errors.message ? "border-rose-400" : "border-slate-300"}`}
                />
                {errors.message ? <span className="mt-1 block text-xs text-rose-600">{errors.message}</span> : null}
              </label>

              <div className="mt-3 text-xs text-slate-500">
                Ao enviar, está a pedir um contacto inicial sem compromisso para avaliarmos o seu caso.
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {isSubmitting ? "A enviar..." : "Pedir diagnóstico gratuito"}
                <ArrowRight className="h-4 w-4" />
              </button>

              {hasErrors ? <p className="mt-3 text-xs text-rose-600">Verifique os campos assinalados antes de enviar.</p> : null}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

