import React from 'react';
    import { View, Text, StyleSheet } from 'react-native';
    import { useThemeStore } from '../../../src/store/useThemeStore';
    import i18n from '../../../src/i18n';

    const data = i18n.t('procedures.bleeding.fibrinogenDeficit', { returnObjects: true });

    const renderContent = (content: any, level = 0) => {
      if (typeof content === 'string') {
        return <Text style={[styles.text, { color: styles.textColor.color }]}>{content}</Text>;
      }

      if (Array.isArray(content)) {
        return (
          <View style={styles.list}>
            {content.map((item, index) => (
              <View key={index} style={styles.listItem}>
                <Text style={[styles.bullet, { color: styles.textColor.color }]}>•</Text>
                <Text style={[styles.text, { color: styles.textColor.color }]}>{item}</Text>
              </View>
            ))}
          </View>
        );
      }

      return Object.entries(content).map(([key, value]) => {
        if (key === 'title') return null;

        return (
          <View key={key} style={[styles.section, { marginLeft: level * 16 }]}>
            {content.title && <Text style={[styles.sectionTitle, { color: styles.textColor.color }]}>{content.title}</Text>}
            {renderContent(value, level + 1)}
          </View>
        );
      });
    };
    const styles = StyleSheet.create({
      textColor: {
        color: '#000000', // Default color, will be overridden by theme
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
    });

    export default function FibrinogenDeficit() {
      const { theme } = useThemeStore();
      const isDark = theme === 'dark';

      styles.textColor.color = isDark ? '#ffffff' : '#000000';
      const cardStyle = StyleSheet.compose(styles.card, { backgroundColor: isDark ? '#1a1a1a' : '#ffffff' });

      return (
        <View style={cardStyle}>
          {renderContent(data)}
        </View>
      );
    }
