import { create } from 'zustand';
import i18n from '../i18n';
import { useEffect } from 'react';

interface LanguageState {
  language: string;
  setLanguage: (lang: string) => void;
}

// Crear el store con funcionalidad mejorada
export const useLanguageStore = create<LanguageState>((set) => ({
  language: 'en',
  setLanguage: (lang) => {
    if (lang === 'es' || lang === 'en') {
      console.log(`Cambiando idioma a: ${lang}`); // Log para depuración
      i18n.locale = lang;
      set({ language: lang });
    } else {
      // Por defecto, usar inglés si se solicita un idioma no compatible
      console.log('Idioma no soportado, usando inglés'); // Log para depuración
      i18n.locale = 'en';
      set({ language: 'en' });
    }
  },
}));

// Hook personalizado para depurar cambios en el idioma
export const useLanguageDebug = () => {
  const { language } = useLanguageStore();

  useEffect(() => {
    console.log('Idioma actual:', language);
    console.log('i18n.locale:', i18n.locale);
  }, [language]);

  return null;
};