type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, text, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">{eyebrow}</p>
      <h2 className="text-balance font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-stone-300 sm:text-lg">{text}</p> : null}
    </div>
  );
}
