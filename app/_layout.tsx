import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { useThemeStore } from '@/src/store/useThemeStore';
import { ThemeProvider } from './components/ThemeContext';

export default function RootLayout() {
  const systemTheme = useColorScheme();
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    if (theme === 'system') {
      setTheme(systemTheme);
    }
  }, [systemTheme, theme]);

  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="procedures/[category]" options={{ headerShown: false }} />
        <Stack.Screen name="procedures/calculator" options={{ headerShown: false }} />
        <Stack.Screen name="procedures/calculator/[type]" options={{ headerShown: false }} />
        <Stack.Screen name="procedures/bloodPressure/hypertensiveCrisis" options={{ headerShown: false }} />
        <Stack.Screen name="procedures/bloodPressure/hypotension" options={{ headerShown: false }} />
        <Stack.Screen name="procedures/infusions/bicarbonate" options={{ headerShown: false }} />
        <Stack.Screen name="procedures/infusions/saline" options={{ headerShown: false }} />
        <Stack.Screen name="procedures/infusions/calcium" options={{ headerShown: false }} />
        <Stack.Screen name="procedures/opioids/[type]" options={{ headerShown: false }} />
        <Stack.Screen name="procedures/drugs/[type]" options={{ headerShown: false }} />
        <Stack.Screen name="procedures/bleeding/[type]" options={{ headerShown: false }} />
        <Stack.Screen name="procedures/glycemia/[type]" options={{ headerShown: false }} />
        <Stack.Screen name="procedures/transfusions/[type]" options={{ headerShown: false }} />
        <Stack.Screen name="procedures/electrolytes/[type]" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
    </ThemeProvider>
  );
}
