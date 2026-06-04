import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border-gold-500 bg-gold-500 text-ink-950 shadow-gold hover:bg-gold-300 hover:border-gold-300',
  secondary:
    'border-white/20 bg-white/[0.04] text-white hover:border-gold-400/70 hover:bg-white/[0.08]',
  ghost: 'border-transparent text-stone-200 hover:text-white hover:bg-white/[0.06]',
};

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type LinkButtonProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

export function Button({ children, variant = 'primary', className, ...props }: LinkButtonProps | NativeButtonProps) {
  const classes = cn(
    'inline-flex min-h-12 items-center justify-center rounded-md border px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950',
    variantClasses[variant],
    className,
  );

  if ('href' in props && props.href) {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
