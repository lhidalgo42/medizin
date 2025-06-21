import React, { createContext, useContext, ReactNode, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { lightTheme, darkTheme, Theme } from '../styles/theme';
import { useThemeStore } from '@/src/store/useThemeStore';

interface ThemeContextType extends Theme {
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const { theme: selectedTheme } = useThemeStore();
  
  const isDark = useMemo(() => {
    if (selectedTheme === 'system') {
      return systemColorScheme === 'dark';
    }
    return selectedTheme === 'dark';
  }, [selectedTheme, systemColorScheme]);
  
  const theme = isDark ? darkTheme : lightTheme;
  
  return (
    <ThemeContext.Provider value={{ ...theme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};