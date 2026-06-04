import { ShieldCheck, Sparkles, UsersRound } from 'lucide-react';
import studioPhoto from '../assets/studio-photo.png';
import { SectionHeading } from '../components/SectionHeading';
import { studioData } from '../data/studioData';

const icons = [ShieldCheck, Sparkles, UsersRound];

export function AboutSection() {
  const { about } = studioData;

  return (
    <section className="section-shell" id="hakkimizda">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_.82fr] lg:px-8">
        <div>
          <SectionHeading eyebrow={about.eyebrow} title={about.title} text={about.story} />
          <div className="mt-9 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {about.highlights.map((item, index) => {
              const Icon = icons[index] ?? Sparkles;
              return (
                <article className="group rounded-md border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-gold-400/50 hover:bg-white/[0.055]" key={item.title}>
                  <Icon className="mb-5 text-gold-300" size={25} strokeWidth={1.7} />
                  <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-stone-400">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
        <div className="relative min-h-[520px] overflow-hidden rounded-md border border-white/10 bg-ink-900 p-5 shadow-soft">
          <img alt="Arthena Tattoo Studio iç mekan fotoğrafı" className="absolute inset-0 size-full object-cover" src={studioPhoto} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(199,154,75,.18),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(123,30,37,.24),transparent_30%)]" />
          <div className="relative flex h-full flex-col justify-end rounded-md border border-white/10 bg-black/10 p-7">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-300">Private Studio</p>
            <h3 className="mt-5 font-display text-4xl font-semibold text-white">Sessiz, odaklı ve yalnızca sizin randevunuza ayrılmış bir atmosfer.</h3>
            <p className="mt-5 leading-8 text-stone-300">
              Her detay; konfor, güven ve tasarımın net bir şekilde hissedilmesi için planlandı.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
