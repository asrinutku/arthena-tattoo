import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { studioData } from '../data/studioData';

export function ServicesSection() {
  return (
    <section className="section-shell bg-ink-900/55" id="hizmetler">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Hizmetler"
          title="Fikriniz hangi stilde olursa olsun, teknik planla başlar."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {studioData.services.map((service, index) => (
            <article className="group rounded-md border border-white/10 bg-ink-950/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-gold-400/55 hover:shadow-gold" key={service.title}>
              <div className="flex items-start justify-between gap-5">
                <span className="font-display text-5xl font-semibold text-white/10">{String(index + 1).padStart(2, '0')}</span>
                <ArrowUpRight className="text-stone-600 transition group-hover:text-gold-300" size={24} />
              </div>
              <h3 className="mt-8 font-display text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 leading-7 text-stone-400">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
