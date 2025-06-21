import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useThemeStore } from '@/src/store/useThemeStore';
import { ThemeProvider } from '@/app/components';
import { LanguageInitializer } from '@/app/components/LanguageInitializer';
import { useColorScheme } from 'react-native';

export default function RootLayout() {
  const systemTheme = useColorScheme();
  const { theme } = useThemeStore();
  
  // Determinar el estilo de la barra de estado
  const statusBarStyle = theme === 'system' 
    ? (systemTheme === 'dark' ? 'light' : 'dark')
    : (theme === 'dark' ? 'light' : 'dark');

  return (
    <LanguageInitializer>
      <ThemeProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="procedures/[category]" options={{ headerShown: false }} />
          <Stack.Screen name="procedures/calculator" options={{ headerShown: false }} />
          <Stack.Screen name="procedures/calculator/[type]" options={{ headerShown: false }} />
          <Stack.Screen name="procedures/bloodPressure/[type]" options={{ headerShown: false }} />
          <Stack.Screen name="procedures/infusions/[type]" options={{ headerShown: false }} />
          <Stack.Screen name="procedures/opioids/[type]" options={{ headerShown: false }} />
          <Stack.Screen name="procedures/drugs/[type]" options={{ headerShown: false }} />
          <Stack.Screen name="procedures/bleeding/[type]" options={{ headerShown: false }} />
          <Stack.Screen name="procedures/glycemia/[type]" options={{ headerShown: false }} />
          <Stack.Screen name="procedures/transfusions/[type]" options={{ headerShown: false }} />
          <Stack.Screen name="procedures/electrolytes/[type]" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style={statusBarStyle} />
      </ThemeProvider>
    </LanguageInitializer>
  );
}
