import { SectionHeading } from '../components/SectionHeading';
import { studioData } from '../data/studioData';

export function ArtistsSection() {
  return (
    <section className="section-shell" id="sanatcilar">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Sanatçılar"
          title="Her sanatçı kendi imzasını, sizin hikayenizle buluşturur."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {studioData.artists.map((artist) => (
            <article className="group overflow-hidden rounded-md border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-gold-400/50" key={artist.name}>
              <div className="aspect-[4/5] overflow-hidden bg-ink-900">
                <img alt={`${artist.name} portre alanı`} className="size-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" src={artist.image} />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold-400">{artist.specialty}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-white">{artist.name}</h3>
                <p className="mt-3 leading-7 text-stone-400">{artist.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
