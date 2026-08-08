'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { LANGUAGES } from '../i18n/translations';

export default function LanguageToggle() {
  const { language, setLanguage } = useApp();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const activeLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

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
        className="flex items-center gap-1.5 px-2.5 py-1.5 font-mono text-xs tracking-wide text-muted hover:text-foreground border border-line hover:border-line-strong transition-colors duration-200 cursor-pointer"
      >
        <span className="uppercase">{activeLang.code}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-[9px] text-accent"
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-36 p-1 z-50 bg-elevated border border-line-strong"
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
                  className={`w-full flex items-center justify-between px-3 py-2 font-mono text-xs transition-colors duration-150 cursor-pointer ${
                    isSelected ? 'text-accent' : 'text-muted hover:text-foreground'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="uppercase">{lang.code}</span>
                    <span className="text-faint">{lang.label}</span>
                  </span>
                  {isSelected && <span aria-hidden>&bull;</span>}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
