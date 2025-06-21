import { useEffect } from 'react';
import { useLanguageStore } from '@/src/store/useLanguageStore';
import { LanguageProvider } from './LanguageContext';

export const LanguageInitializer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { initializeLanguage } = useLanguageStore();
  
  useEffect(() => {
    // Inicializar el idioma al cargar la app
    initializeLanguage();
  }, [initializeLanguage]);
  
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
};