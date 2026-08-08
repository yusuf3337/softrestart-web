'use client';

import Link from 'next/link';
import { useApp } from '../context/AppContext';
import Logo from './Logo';

export default function Footer() {
  const { t } = useApp();
  const year = new Date().getFullYear();

  const LINKS = {
    [t('footer.col.services')]: [
      { label: t('footer.link.webApp'), href: '/hizmetler' },
      { label: t('footer.link.mobileApp'), href: '/hizmetler' },
      { label: t('footer.link.saas'), href: '/hizmetler' },
      { label: t('footer.link.uiux'), href: '/hizmetler' },
      { label: t('footer.link.devops'), href: '/hizmetler' },
    ],
    [t('footer.col.company')]: [
      { label: t('nav.process'), href: '/surec' },
      { label: t('nav.careers'), href: '/kariyer' },
      { label: t('nav.faq'), href: '/#sss' },
      { label: t('nav.contact'), href: '/#iletisim' },
    ],
    [t('footer.col.contact')]: [
      { label: 'work.softrestart@gmail.com', href: 'mailto:work.softrestart@gmail.com' },
      { label: '+90 542 819 1504', href: 'tel:+905428191504' },
      { label: '+90 548 866 5422', href: 'tel:+905488665422' },
      { label: 'location: everywhere', href: '/#iletisim' },
    ],
  };

  return (
    <footer className="relative w-full bg-background border-t border-line">
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Logo />
            <p className="text-sm leading-relaxed max-w-sm text-muted">{t('footer.desc')}</p>
          </div>

          {/* Link columns */}
          {(Object.entries(LINKS) as [string, { label: string; href: string }[]][]).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-3">
              <h4 className="font-mono text-xs uppercase tracking-widest text-faint mb-1">
                <span className="text-accent">#</span> {title}
              </h4>
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-mono text-sm text-muted hover:text-foreground transition-colors duration-200 break-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-line">
          <p className="font-mono text-xs text-faint">
            © {year} softrestart — {t('footer.rights')}
          </p>
          <span className="font-mono text-xs text-muted">
            <span className="text-accent">&gt;</span> rewrite the rules
            <span className="caret-blink text-accent">_</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
