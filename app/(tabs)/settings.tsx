import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemeStore } from '@/src/store/useThemeStore';
import { useLanguageStore } from '@/src/store/useLanguageStore';
import { useTranslation } from '@/src/hooks/useTranslation';
import { useTheme } from '@/app/components';

const themes = [
  { id: 'light', icon: 'sunny-outline' },
  { id: 'dark', icon: 'moon-outline' },
  { id: 'system', icon: 'phone-portrait-outline' },
];

const languages = [
  { id: 'en', icon: 'globe-outline', name: 'English' },
  { id: 'es', icon: 'globe-outline', name: 'Español' },
  { id: 'system', icon: 'phone-portrait-outline' },
];

export default function SettingsScreen() {
  const { theme, setTheme } = useThemeStore();
  const { language, setLanguage } = useLanguageStore();
  const { t } = useTranslation();
  const { isDark } = useTheme();

  // Manejar cambio de idioma
  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <View style={[
      styles.container,
      { backgroundColor: isDark ? '#000000' : '#f0f0f0' }
    ]}>
      {/* Sección de tema */}
      <View style={[
        styles.section,
        { backgroundColor: isDark ? '#1a1a1a' : '#ffffff' }
      ]}>
        <Text style={[
          styles.sectionTitle,
          { color: isDark ? '#ffffff' : '#000000' }
        ]}>
          {t('settings.theme')}
        </Text>
        <View style={styles.optionsContainer}>
          {themes.map((themeOption) => (
            <TouchableOpacity
              key={themeOption.id}
              style={[
                styles.option,
                theme === themeOption.id && styles.selectedOption,
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
                styles.optionText,
                { color: isDark ? '#ffffff' : '#000000' }
              ]}>
                {t(`settings.theme${themeOption.id.charAt(0).toUpperCase() + themeOption.id.slice(1)}`)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Sección de idioma */}
      <View style={[
        styles.section,
        { backgroundColor: isDark ? '#1a1a1a' : '#ffffff' }
      ]}>
        <Text style={[
          styles.sectionTitle,
          { color: isDark ? '#ffffff' : '#000000' }
        ]}>
          {t('settings.language')}
        </Text>
        <View style={styles.optionsContainer}>
          {languages.map((langOption) => (
            <TouchableOpacity
              key={langOption.id}
              style={[
                styles.option,
                language === langOption.id && styles.selectedOption,
                { backgroundColor: isDark ? '#2a2a2a' : '#f8f8f8' }
              ]}
              onPress={() => handleLanguageChange(langOption.id)}
            >
              <Ionicons
                name={langOption.icon as any}
                size={24}
                color={language === langOption.id ? '#007AFF' : (isDark ? '#ffffff' : '#000000')}
              />
              <Text style={[
                styles.optionText,
                { color: isDark ? '#ffffff' : '#000000' }
              ]}>
                {langOption.id === 'system'
                  ? t('settings.languageSystem')
                  : langOption.name}
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
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  option: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  selectedOption: {
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
  },
  optionText: {
    marginTop: 8,
    fontSize: 12,
  },
});