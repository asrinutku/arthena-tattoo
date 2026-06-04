import { X } from 'lucide-react';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';

type LightboxItem = {
  title: string;
  category: string;
  image: string;
};

type LightboxProps = {
  item: LightboxItem | null;
  onClose: () => void;
};

export function Lightbox({ item, onClose }: LightboxProps) {
  useBodyScrollLock(Boolean(item));

  if (!item) return null;

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-[70] grid place-items-center bg-black/85 p-4 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
    >
      <div className="relative w-full max-w-4xl overflow-hidden rounded-md border border-white/15 bg-ink-900 shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <button
          aria-label="Görseli kapat"
          className="absolute right-4 top-4 z-10 inline-flex size-11 items-center justify-center rounded-md border border-white/15 bg-black/50 text-white transition hover:border-gold-300 hover:text-gold-300"
          onClick={onClose}
          type="button"
        >
          <X size={20} />
        </button>
        <img alt={item.title} className="max-h-[78vh] w-full object-cover" src={item.image} />
        <div className="border-t border-white/10 p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-400">{item.category}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-white">{item.title}</h3>
        </div>
      </div>
    </div>
  );
}
