import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Stack, router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import i18n from '../../../src/i18n';
import { useThemeStore } from '../../../src/store/useThemeStore';

export default function DrugProcedureScreen() {
  const { type } = useLocalSearchParams();
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';
  const data = i18n.t(`procedures.drugs.${type}`, { returnObjects: true });

  const renderContent = (content: any, level = 0) => {
    if (typeof content === 'string') {
      return (
        <Text style={[styles.text, { color: isDark ? '#ffffff' : '#000000' }]}>
          {content}
        </Text>
      );
    }

    if (Array.isArray(content)) {
      return (
        <View style={styles.list}>
          {content.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={[styles.bullet, { color: isDark ? '#ffffff' : '#000000' }]}>•</Text>
              <Text style={[styles.text, { color: isDark ? '#ffffff' : '#000000' }]}>
                {item}
              </Text>
            </View>
          ))}
        </View>
      );
    }

    return Object.entries(content).map(([key, value]) => {
      if (key === 'title') return null;
      
      return (
        <View key={key} style={[styles.section, { marginLeft: level * 16 }]}>
          {content.title && (
            <Text style={[styles.sectionTitle, { color: isDark ? '#ffffff' : '#000000' }]}>
              {content.title}
            </Text>
          )}
          {renderContent(value, level + 1)}
        </View>
      );
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#000000' : '#f0f0f0' }]}>
      <Stack.Screen 
        options={{ 
          title: data.title,
          headerStyle: {
            backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
          },
          headerTintColor: isDark ? '#ffffff' : '#000000',
        }} 
      />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        style={styles.scrollView}
      >
        <View style={styles.contentContainer}>
          <View style={[styles.card, { backgroundColor: isDark ? '#1a1a1a' : '#ffffff' }]}>
            {renderContent(data)}
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={[styles.backButton, { backgroundColor: isDark ? '#1a1a1a' : '#ffffff' }]}
        onPress={() => router.back()}
      >
        <View style={styles.backButtonContent}>
          <Ionicons 
            name="arrow-back" 
            size={24} 
            color={isDark ? '#ffffff' : '#000000'} 
          />
          <Text style={[styles.backButtonText, { color: isDark ? '#ffffff' : '#000000' }]}>
            {i18n.t('common.back')}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  card: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  section: {
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  list: {
    marginTop: 4,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  bullet: {
    marginRight: 8,
    fontSize: 14,
  },
  text: {
    fontSize: 14,
    flex: 1,
  },
  backButton: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
  },
  backButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500',
  },
});
