import { ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { studioData } from '../data/studioData';

export function HeroSection() {
  const { brand, contact } = studioData;
  const instagramUrl = contact.socials.find((social) => social.label === 'Instagram')?.href ?? '#iletisim';

  return (
    <section className="relative isolate min-h-[92svh] overflow-hidden pt-24" id="hero">
      <img alt="" aria-hidden="true" className="absolute inset-0 -z-20 size-full object-cover opacity-75" src={brand.heroImage} />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(6,6,6,.95),rgba(6,6,6,.72)_46%,rgba(6,6,6,.42))]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink-950 to-transparent" />

      <div className="mx-auto flex min-h-[calc(92svh-6rem)] max-w-7xl items-center px-5 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.42em] text-gold-300">{brand.tagline}</p>
          <h1 className="text-balance font-display text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            {brand.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200 sm:text-xl">{brand.heroText}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={instagramUrl} rel="noreferrer" target="_blank">
              Randevu Al <ArrowRight className="ml-3" size={17} />
            </Button>
            <Button href="#galeri" variant="secondary">
              Galeriyi Gör
            </Button>
          </div>
          <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/10 pt-7">
            {[
              { value: '8+', label: 'Yıllık Deneyim' },
              { value: '2.000+', label: 'Tamamlanan Dövme' },
              { value: '100%', label: 'Steril süreç' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-3xl font-semibold text-white">{stat.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.2em] text-stone-500">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
