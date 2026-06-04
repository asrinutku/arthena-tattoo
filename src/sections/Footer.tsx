import { studioData } from '../data/studioData';
import { SocialIcon } from '../components/SocialIcon';

export function Footer() {
  const year = new Date().getFullYear();
  const { brand, contact, navLinks } = studioData;

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-9 px-5 py-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.7fr] lg:px-8">
        <div>
          <a className="font-display text-2xl font-semibold text-white" href="#hero">
            {brand.name}
          </a>
          <p className="mt-4 max-w-md leading-7 text-stone-400">{brand.heroText}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-300">Hızlı Linkler</h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {navLinks.map((link) => (
              <a className="text-stone-400 transition hover:text-gold-300" href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-300">Sosyal</h3>
          <div className="mt-4 flex gap-3">
            {contact.socials.map((social) => (
              <SocialIcon href={social.href} key={social.label} label={social.label} />
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-stone-500">
        &copy; {year} {brand.name}. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
