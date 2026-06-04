import { useState } from 'react';
import { Lightbox } from '../components/Lightbox';
import { SectionHeading } from '../components/SectionHeading';
import { studioData } from '../data/studioData';

type GalleryItem = (typeof studioData.gallery)[number];

export function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section className="section-shell bg-ink-900/55" id="galeri">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading align="center" eyebrow="Galeri" title="Seçilmiş işler ve tasarım yönleri." />
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-5">
          {studioData.gallery.map((item) => (
            <button
              className="group relative aspect-[4/5] overflow-hidden rounded-md border border-white/10 bg-ink-950 text-left transition duration-300 hover:-translate-y-1 hover:border-gold-400/60"
              key={item.title}
              onClick={() => setSelectedItem(item)}
              type="button"
            >
              <img alt={item.title} className="size-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" src={item.image} />
              <span className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-80 transition group-hover:opacity-95" />
              <span className="absolute inset-x-0 bottom-0 p-4">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-300">{item.category}</span>
                <span className="mt-2 block font-display text-xl font-semibold text-white">{item.title}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
      <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}
