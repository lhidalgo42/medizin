import React, { createContext, useContext, ReactNode, useEffect, useState, useCallback } from 'react';
import { useLanguageStore } from '@/src/store/useLanguageStore';
import * as Localization from 'expo-localization';
import i18n from '@/src/i18n';

interface LanguageContextType {
  currentLanguage: string;
  forceUpdate: () => void;
  t: (key: string, options?: any) => string;
  updateCounter: number;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { language } = useLanguageStore();
  const [updateCounter, setUpdateCounter] = useState(0);

  const forceUpdate = useCallback(() => {
    setUpdateCounter(prev => prev + 1);
  }, []);

  useEffect(() => {
    // Determinar el idioma actual basado en la configuración
    let currentLang;

    if (language === 'system') {
      const deviceLocale = Localization.locale.split('-')[0];
      currentLang = (deviceLocale === 'es' || deviceLocale === 'en') ? deviceLocale : 'en';
    } else {
      currentLang = language;
    }

    console.log('Cambiando idioma a:', currentLang, 'desde:', language);

    // Aplicar el idioma a i18n
    if (i18n.locale !== currentLang) {
      i18n.locale = currentLang;
      console.log('i18n.locale actualizado a:', i18n.locale);
      forceUpdate(); // Forzar re-renderizado cuando cambie el idioma
    }
  }, [language, forceUpdate]);

  const currentLanguage = language === 'system'
    ? (Localization.locale.split('-')[0] === 'es' ? 'es' : 'en')
    : language;

  // Función t reactiva
  const t = useCallback((key: string, options?: any) => {
    return i18n.t(key, options);
  }, []); // Se actualiza cuando cambia updateCounter

  return (
    <LanguageContext.Provider value={{ currentLanguage, forceUpdate, t, updateCounter }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
};
