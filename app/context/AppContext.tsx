'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Language, translations } from '../i18n/translations';

export type Theme = 'dark';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  t: (key: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('tr');

  useEffect(() => {
    // Always enforce dark theme on root
    document.documentElement.classList.add('dark');

    // Load stored language preference
    const savedLang = localStorage.getItem('softrestart-lang') as Language | null;
    if (savedLang && ['tr', 'en', 'de', 'ru'].includes(savedLang)) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('softrestart-lang', lang);
  }, []);

  const setTheme = useCallback(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = useCallback(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const t = useCallback(
    (key: string): string => {
      const langDict = translations[language] || translations.tr;
      return langDict[key] || translations.tr[key] || key;
    },
    [language]
  );

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        theme: 'dark',
        setTheme,
        toggleTheme,
        t,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
