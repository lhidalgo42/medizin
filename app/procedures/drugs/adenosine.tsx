import React from 'react';
    import { View, StyleSheet } from 'react-native';
    import { useThemeStore } from '../../../src/store/useThemeStore';
    import i18n from '../../../src/i18n';
    import DrugContentRenderer from './components/DrugContentRenderer';

    const data = i18n.t('procedures.drugs.adenosine', { returnObjects: true });
    const styles = StyleSheet.create({

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

    });
    export default function Adenosine() {
      const { theme } = useThemeStore();
      const isDark = theme === 'dark';
      const cardStyle = StyleSheet.compose(styles.card, { backgroundColor: isDark ? '#1a1a1a' : '#ffffff' });

      return (
        <View style={cardStyle}>
          <DrugContentRenderer content={data} />
        </View>
      );
    }
