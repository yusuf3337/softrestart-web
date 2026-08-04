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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          ? 'py-3 bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="flex items-center shrink-0">
          <Logo variant="auto" />
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center justify-center gap-8 lg:gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-semibold tracking-wide transition-colors duration-200 py-1 ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Language Selector & Main CTA Button */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <LanguageToggle />

          <Link
            href="/#iletisim"
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm text-white transition-all duration-300 overflow-hidden shadow-md"
            style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <span className="relative z-10">{t('nav.cta')}</span>
            <span className="relative z-10 transition-transform duration-200 group-hover:translate-x-1">→</span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
              }}
            />
          </Link>
        </div>

        {/* Mobile Hamburger Controls */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageToggle />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-slate-900 border border-slate-800 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0b0f19]/98 border-b border-slate-800 backdrop-blur-xl overflow-hidden"
          >
            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold py-2 px-3 rounded-lg transition-colors ${
                    pathname === item.href
                      ? 'bg-blue-900/40 text-white font-bold border border-blue-700/50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-3 border-t border-slate-800">
                <Link
                  href="/#iletisim"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 text-center shadow-lg"
                >
                  {t('nav.cta')} →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
