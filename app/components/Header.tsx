'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import LanguageToggle from './LanguageToggle';
import { useApp } from '../context/AppContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useApp();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lowercase safely without producing the combining dot that Turkish "İ" yields.
  const lower = (s: string) => s.toLocaleLowerCase('tr-TR').replace(/\u0307/g, '');

  const navItems = [
    { label: t('nav.services'), href: '/hizmetler' },
    { label: t('nav.process'), href: '/surec' },
    { label: t('nav.careers'), href: '/kariyer' },
    { label: t('nav.faq'), href: '/#sss' },
    { label: t('nav.contact'), href: '/#iletisim' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-background/90 backdrop-blur-md border-b border-line'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <Logo />

        {/* Center nav — terminal path style */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-mono text-sm tracking-tight transition-colors duration-200 ${
                  isActive ? 'text-foreground' : 'text-muted hover:text-foreground'
                }`}
              >
                <span className="text-accent">/</span>
                {lower(item.label)}
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1.5 left-0 right-0 h-px bg-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <LanguageToggle />
          <Link
            href="/#iletisim"
            className="group inline-flex items-center gap-2 px-4 py-2 font-mono text-sm text-background bg-accent hover:bg-foreground transition-colors duration-200"
          >
            <span>{lower(t('nav.cta'))}</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">&rarr;</span>
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menüyü aç/kapat"
            className="p-2 text-muted hover:text-foreground border border-line focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/98 border-b border-line backdrop-blur-xl overflow-hidden"
          >
            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-mono text-base py-2.5 transition-colors ${
                    pathname === item.href ? 'text-accent' : 'text-muted hover:text-foreground'
                  }`}
                >
                  <span className="text-accent">/</span>
                  {lower(item.label)}
                </Link>
              ))}
              <Link
                href="/#iletisim"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 py-3 font-mono text-sm text-background bg-accent"
              >
                {lower(t('nav.cta'))} &rarr;
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
