import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import i18n from '@/src/i18n';
import { useThemeStore } from '@/src/store/useThemeStore';

const themes = [
  { id: 'light', icon: 'sunny-outline' },
  { id: 'dark', icon: 'moon-outline' },
  { id: 'system', icon: 'phone-portrait-outline' },
];

export default function SettingsScreen() {
  const { theme, setTheme } = useThemeStore();
  const isDark = theme === 'dark';

  return (
    <View style={[
      styles.container,
      { backgroundColor: isDark ? '#000000' : '#f0f0f0' }
    ]}>
      <View style={[
        styles.section,
        { backgroundColor: isDark ? '#1a1a1a' : '#ffffff' }
      ]}>
        <Text style={[
          styles.sectionTitle,
          { color: isDark ? '#ffffff' : '#000000' }
        ]}>
          {i18n.t('settings.theme')}
        </Text>
        <View style={styles.themeContainer}>
          {themes.map((themeOption) => (
            <TouchableOpacity
              key={themeOption.id}
              style={[
                styles.themeOption,
                theme === themeOption.id && styles.selectedTheme,
                { backgroundColor: isDark ? '#2a2a2a' : '#f8f8f8' }
              ]}
              onPress={() => setTheme(themeOption.id as any)}
            >
              <Ionicons
                name={themeOption.icon as any}
                size={24}
                color={theme === themeOption.id ? '#007AFF' : (isDark ? '#ffffff' : '#000000')}
              />
              <Text style={[
                styles.themeText,
                { color: isDark ? '#ffffff' : '#000000' }
              ]}>
                {i18n.t(`settings.theme${themeOption.id.charAt(0).toUpperCase() + themeOption.id.slice(1)}`)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  themeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  themeOption: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  selectedTheme: {
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
  },
  themeText: {
    marginTop: 8,
    fontSize: 12,
  },
});
