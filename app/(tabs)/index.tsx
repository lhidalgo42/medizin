import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import i18n from '../../src/i18n';
import { useThemeStore } from '../../src/store/useThemeStore';

const categories = [
  { id: 'falls', icon: 'body-outline', color: '#FF6B6B' },
  { id: 'infusions', icon: 'water-outline', color: '#4ECDC4' },
  { id: 'fever', icon: 'thermometer-outline', color: '#FFE66D' },
  { id: 'bloodPressure', icon: 'fitness-outline', color: '#FF8484' },
  { id: 'opioids', icon: 'medical-outline', color: '#95E1D3' },
  { id: 'drugs', icon: 'flask-outline', color: '#A8E6CF' },
  { id: 'bleeding', icon: 'water-outline', color: '#FF3366' },
  { id: 'cardiopulmonaryArrest', icon: 'heart-outline', color: '#FF6F91' },
  { id: 'glycemia', icon: 'analytics-outline', color: '#845EC2' },
  { id: 'transfusions', icon: 'git-branch-outline', color: '#D65DB1' },
  { id: 'tachyarrhythmias', icon: 'pulse-outline', color: '#FF9671' },
  { id: 'rapidIntubation', icon: 'medkit-outline', color: '#FFC75F' },
  { id: 'tacoAndHeparin', icon: 'timer-outline', color: '#F9F871' },
  { id: 'electrolytes', icon: 'flash-outline', color: '#00C9A7' },
  { id: 'calculator', icon: 'calculator-outline', color: '#4B4453' },
];

export default function HomeScreen() {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  const handleCategoryPress = (categoryId: string) => {
    router.push(`/procedures/${categoryId}`);
  };

  return (
    <ScrollView 
      style={[
        styles.container,
        { backgroundColor: isDark ? '#000000' : '#f0f0f0' }
      ]}
      contentContainerStyle={styles.content}
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          style={[
            styles.card,
            { backgroundColor: isDark ? '#1a1a1a' : '#ffffff' }
          ]}
          onPress={() => handleCategoryPress(category.id)}
        >
          <View style={[styles.iconContainer, { backgroundColor: category.color }]}>
            <Ionicons 
              name={category.icon as any}
              size={24}
              color="#ffffff"
            />
          </View>
          <Text style={[
            styles.cardText,
            { color: isDark ? '#ffffff' : '#000000' }
          ]}>
            {i18n.t(`categories.${category.id}`)}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
