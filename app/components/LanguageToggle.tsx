'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { LANGUAGES, Language } from '../i18n/translations';

export default function LanguageToggle() {
  const { language, setLanguage, theme } = useApp();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const activeLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Dil seçimi"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs md:text-sm tracking-wide transition-all duration-200 cursor-pointer shadow-sm"
        style={{
          background: isDark ? '#1e293b' : '#f1f5f9',
          color: isDark ? '#f8fafc' : '#0f172a',
          border: `1.5px solid ${isDark ? '#334155' : '#cbd5e1'}`,
        }}
      >
        <span>{activeLang.flag}</span>
        <span className="uppercase">{activeLang.code}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[10px] opacity-60"
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-36 rounded-2xl p-1.5 z-50 shadow-xl overflow-hidden"
            style={{
              background: isDark ? '#1e293b' : '#ffffff',
              border: `1.5px solid ${isDark ? '#334155' : '#e2e8f0'}`,
            }}
          >
            {LANGUAGES.map((lang) => {
              const isSelected = lang.code === language;
              return (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs md:text-sm font-semibold transition-colors duration-150 cursor-pointer"
                  style={{
                    background: isSelected
                      ? isDark
                        ? '#334155'
                        : '#eff6ff'
                      : 'transparent',
                    color: isSelected
                      ? '#2563eb'
                      : isDark
                      ? '#cbd5e1'
                      : '#334155',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </div>
                  {isSelected && <span className="text-blue-500 font-bold">✓</span>}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
