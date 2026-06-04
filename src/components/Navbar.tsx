import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { studioData } from '../data/studioData';
import { Button } from './Button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { brand, contact, navLinks } = studioData;
  const instagramUrl = contact.socials.find((social) => social.label === 'Instagram')?.href ?? '#iletisim';

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/78 backdrop-blur-xl">
      <nav aria-label="Ana navigasyon" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a className="group flex items-center gap-3" href="#hero" onClick={() => setIsOpen(false)}>
          <span className="grid size-10 place-items-center rounded-md border border-gold-400/50 bg-gold-400/10 font-display text-lg font-bold text-gold-300 transition group-hover:border-gold-300">
            A
          </span>
          <span>
            <span className="block font-display text-lg font-semibold leading-none text-white">{brand.logoText}</span>
            <span className="mt-1 block text-[10px] font-semibold tracking-[0.28em] text-stone-500">TATTOO STUDIO</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a className="text-sm font-medium text-stone-300 transition hover:text-gold-300" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <Button className="hidden lg:inline-flex" href={instagramUrl} rel="noreferrer" target="_blank">
          Randevu Al
        </Button>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          className="inline-flex size-11 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-white lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <div className={`grid transition-[grid-template-rows] duration-300 lg:hidden ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="mx-5 mb-5 rounded-md border border-white/10 bg-ink-900 p-4">
            {navLinks.map((link) => (
              <a
                className="block rounded-md px-3 py-3 text-sm font-semibold text-stone-200 transition hover:bg-white/[0.06] hover:text-gold-300"
                href={link.href}
                key={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
