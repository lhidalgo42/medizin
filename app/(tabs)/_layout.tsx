import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from '@/src/hooks/useTranslation';
import { useTheme } from '@/app/components';

export default function TabLayout() {
  const { t } = useTranslation();
  const { isDark } = useTheme();

  return (
    <Tabs screenOptions={{
      headerShown: true,
      tabBarStyle: {
        backgroundColor: isDark ? '#1a1a1a' : '#ffffff'
      },
      tabBarActiveTintColor: '#007AFF',
      tabBarInactiveTintColor: isDark ? '#888888' : '#999999',
      headerStyle: {
        backgroundColor: isDark ? '#1a1a1a' : '#ffffff'
      },
      headerTintColor: isDark ? '#ffffff' : '#000000'
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: t('common.appTitle'),
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="medical" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t('settings.title'),
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          )
        }}
      />
    </Tabs>
  );
}
