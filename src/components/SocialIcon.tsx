import { Camera } from 'lucide-react';

type SocialIconProps = {
  label: string;
  href: string;
};

export function SocialIcon({ label, href }: SocialIconProps) {
  return (
    <a
      aria-label={label}
      className="inline-flex size-11 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-stone-300 transition duration-300 hover:-translate-y-0.5 hover:border-gold-400/60 hover:text-gold-300"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <Camera aria-hidden="true" size={19} strokeWidth={1.8} />
    </a>
  );
}
