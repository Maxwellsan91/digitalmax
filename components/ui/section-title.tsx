type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  headingLevel?: "h1" | "h2";
};

export function SectionTitle({ eyebrow, title, description, centered = false, headingLevel = "h2" }: SectionTitleProps) {
  const Heading = headingLevel;

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full border border-cyan-200/80 bg-cyan-50/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-700">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="text-2xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-[2.65rem]">{title}</Heading>
      {description ? <p className="mt-4 text-base leading-relaxed text-slate-600 sm:mt-5 sm:text-lg">{description}</p> : null}
    </div>
  );
}
