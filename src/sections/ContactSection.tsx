import { Mail, MapPin, Phone } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { SocialIcon } from '../components/SocialIcon';
import { studioData } from '../data/studioData';

export function ContactSection() {
  const { contact } = studioData;
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(contact.address)}&output=embed`;

  return (
    <section className="section-shell bg-ink-900/55" id="iletisim">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading align="center" eyebrow="İletişim" title="Stüdyoya gelmeden önce fikrinizi birlikte netleştirelim." />
        <div className="mt-12 grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-md border border-white/10 bg-ink-950/70 p-6">
            <div className="grid gap-5">
              <a className="contact-link" href={contact.mapUrl} rel="noreferrer" target="_blank">
                <MapPin className="text-gold-300" size={22} />
                <span>{contact.address}</span>
              </a>
              <a className="contact-link" href={`tel:${contact.phone.replaceAll(' ', '')}`}>
                <Phone className="text-gold-300" size={22} />
                <span>{contact.phone}</span>
              </a>
              <a className="contact-link" href={`mailto:${contact.email}`}>
                <Mail className="text-gold-300" size={22} />
                <span>{contact.email}</span>
              </a>
            </div>
            <div className="mt-8 border-t border-white/10 pt-6">
              <h3 className="font-display text-xl font-semibold text-white">Çalışma Saatleri</h3>
              <ul className="mt-4 space-y-2 text-stone-400">
                {contact.hours.map((hour) => (
                  <li key={hour}>{hour}</li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex gap-3">
              {contact.socials.map((social) => (
                <SocialIcon href={social.href} key={social.label} label={social.label} />
              ))}
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-md border border-white/10 bg-ink-950">
            <iframe
              className="absolute inset-0 size-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={mapEmbedUrl}
              title="Arthena Tattoo Studio Google Maps konumu"
            />
            <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-3 rounded-md border border-white/10 bg-black/70 p-5 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-2xl font-semibold text-white">Arthena Tattoo Studio</h3>
                <p className="mt-2 max-w-md leading-7 text-stone-300">{contact.address}</p>
              </div>
              <a className="inline-flex min-h-11 items-center justify-center rounded-md border border-gold-400/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300 transition hover:bg-gold-400 hover:text-ink-950" href={contact.mapUrl} rel="noreferrer" target="_blank">
                Google Maps'te Aç
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
