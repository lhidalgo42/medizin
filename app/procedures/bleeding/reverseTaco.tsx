import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useThemeStore } from '@/src/store/useThemeStore';
import i18n from '@/src/i18n';
import ProcedureContentRenderer from '../../components/ProcedureContentRenderer';
import { router, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Corrected import


export default function ReverseTaco() {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  const data = i18n.t('procedures.bleeding.reverseTaco', { returnObjects: true });
  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#000000' : '#f0f0f0' }]}>
      <Stack.Screen
        options={{
          title: data.title,
          headerStyle: {
            backgroundColor: isDark ? '#1a1a1a' : '#ffffff'
          },
          headerTintColor: isDark ? '#ffffff' : '#000000'
        }}
      />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        style={styles.scrollView}
      >
        <View style={styles.contentContainer}>
          <View style={[styles.card, { backgroundColor: isDark ? '#1a1a1a' : '#ffffff' }]}>
            <ProcedureContentRenderer content={data} />
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
  textColor: {
    color: '#000000' // Default color, will be overridden by theme
  },
  card: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  section: {
    marginTop: 12
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8
  },
  list: {
    marginTop: 4
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4
  },
  bullet: {
    marginRight: 8,
    fontSize: 14
  },
  text: {
    fontSize: 14,
    flex: 1
  }
});