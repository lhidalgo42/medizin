import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
    import { Stack, router, useLocalSearchParams } from 'expo-router';
    import { Ionicons } from '@expo/vector-icons';
    import i18n from '../../../src/i18n';
    import { useThemeStore } from '../../../src/store/useThemeStore';
    import Adenosine from './adenosine';
    import Amiodarone from './amiodarone';
    import Lanatoside from './lanatoside';
    import Nitroglycerin from './nitroglycerin';
    import Noradrenaline from './noradrenaline';
    import Labetalol from './labetalol';
    import Nitroprusside from './nitroprusside';
    import Dobutamine from './dobutamine';
    import Milrinone from './milrinone';

    const components = {
      adenosine: Adenosine,
      amiodarone: Amiodarone,
      lanatoside: Lanatoside,
      nitroglycerin: Nitroglycerin,
      noradrenaline: Noradrenaline,
      labetalol: Labetalol,
      nitroprusside: Nitroprusside,
      dobutamine: Dobutamine,
      milrinone: Milrinone,
    };

    export default function DrugProcedureScreen() {
      const { type } = useLocalSearchParams();
      const { theme } = useThemeStore();
      const isDark = theme === 'dark';

      const data = i18n.t(`procedures.drugs.${type}`, { returnObjects: true });
      const Component = components[type as keyof typeof components];

      if (!Component) {
        return (
          <View style={[styles.container, { backgroundColor: isDark ? '#000000' : '#f0f0f0' }]}>
            <Text style={{ color: isDark ? '#ffffff' : '#000000' }}>Procedure not found</Text>
          </View>
        );
      }

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
              <Component />
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
