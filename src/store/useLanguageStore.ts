import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import i18n from '../i18n';
import { useEffect } from 'react';
import { zustandStorage } from './persist';

interface LanguageState {
  language: string;
  setLanguage: (lang: string) => void;
  initializeLanguage: () => void;
}

// Crear el store con funcionalidad mejorada y persistencia
export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: 'system',
      setLanguage: (lang) => {
        if (lang === 'es' || lang === 'en' || lang === 'system') {
          console.log(`Cambiando idioma a: ${lang}`); // Log para depuración
          if (lang !== 'system') {
            i18n.locale = lang;
          }
          set({ language: lang });
        } else {
          // Por defecto, usar sistema si se solicita un idioma no compatible
          console.log('Idioma no soportado, usando sistema'); // Log para depuración
          set({ language: 'system' });
        }
      },
      initializeLanguage: () => {
        const { language } = get();
        if (language !== 'system') {
          i18n.locale = language;
        }
      },
    }),
    {
      name: 'language-storage',
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

// Hook personalizado para depurar cambios en el idioma
export const useLanguageDebug = () => {
  const { language } = useLanguageStore();

  useEffect(() => {
    console.log('Idioma actual:', language);
    console.log('i18n.locale:', i18n.locale);
  }, [language]);

  return null;
};