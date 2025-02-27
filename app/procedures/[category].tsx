import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import i18n from '../../src/i18n';
import { useThemeStore } from '../../src/store/useThemeStore';

export default function ProcedureScreen() {
  const { category } = useLocalSearchParams();
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  const procedures = Object.entries(i18n.t(`procedures.${category}`, { returnObjects: true }))
    .filter(([key]) => !key.includes('Desc') && key !== 'reminder')
    .map(([key, value]) => ({
      id: key,
      title: typeof value === 'object' ? value.title : value,
      hasDetails: typeof value === 'object',
    }));

  const reminder = category === 'fever' ? i18n.t('procedures.fever.reminder') : null;

  const handleProcedurePress = (procedureId: string) => {
    if (category === 'bloodPressure') {
      if (procedureId === 'hypertensiveCrisis') {
        router.push('/procedures/bloodPressure/hypertensiveCrisis');
      } else if (procedureId === 'hypotension') {
        router.push('/procedures/bloodPressure/hypotension');
      }
    } else if (category === 'infusions') {
      if (procedureId === 'bicarbonate') {
        router.push('/procedures/infusions/bicarbonate');
      } else if (procedureId === 'saline') {
        router.push('/procedures/infusions/saline');
      } else if (procedureId === 'calcium') {
        router.push('/procedures/infusions/calcium');
      }
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#000000' : '#f0f0f0' }]}>
      <Stack.Screen 
        options={{ 
          title: i18n.t(`categories.${category}`),
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
          {procedures.map((procedure) => (
            <TouchableOpacity
              key={procedure.id}
              style={[styles.card, { backgroundColor: isDark ? '#1a1a1a' : '#ffffff' }]}
              onPress={() => handleProcedurePress(procedure.id)}
              disabled={!procedure.hasDetails}
            >
              <View style={styles.cardHeader}>
                <Text style={[styles.title, { color: isDark ? '#ffffff' : '#000000' }]}>
                  {procedure.title}
                </Text>
                {procedure.hasDetails && (
                  <Ionicons 
                    name="chevron-forward" 
                    size={24} 
                    color={isDark ? '#ffffff' : '#000000'} 
                  />
                )}
              </View>
            </TouchableOpacity>
          ))}
          {reminder && (
            <View style={[styles.reminderCard, { backgroundColor: isDark ? '#1a1a1a' : '#ffffff' }]}>
              <Text style={[styles.reminderText, { color: isDark ? '#ffb74d' : '#f57c00' }]}>
                {reminder}
              </Text>
            </View>
          )}
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
    justifyContent: 'center',
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
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
  },
  reminderCard: {
    padding: 16,
    borderRadius: 12,
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  reminderText: {
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'italic',
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
