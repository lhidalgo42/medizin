import { create } from 'zustand';
import i18n from '../i18n';

interface LanguageState {
  language: string;
  setLanguage: (lang: string) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: 'en',
  setLanguage: () => {
    i18n.locale = 'en';
    set({ language: 'en' });
  },
}));
