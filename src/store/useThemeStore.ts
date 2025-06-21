import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ColorSchemeName } from 'react-native';
import { zustandStorage } from './persist';

interface ThemeState {
  theme: ColorSchemeName | 'system';
  setTheme: (theme: ColorSchemeName | 'system') => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'system',
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);
