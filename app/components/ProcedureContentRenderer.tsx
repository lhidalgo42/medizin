import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useThemeStore } from '../src/store/useThemeStore';

interface Props {
  content: any;
  level?: number;
}

const ProcedureContentRenderer: React.FC<Props> = ({ content, level = 0 }) => {
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  const styles = StyleSheet.create({
    textColor: {
      color: isDark ? '#ffffff' : '#000000', // Set color based on theme
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

  if (typeof content === 'string') {
    return <Text style={[styles.text, styles.textColor]}>{content}</Text>; // Apply textColor style
  }

  if (Array.isArray(content)) {
    return (
      <View style={styles.list}>
        {content.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={[styles.bullet, styles.textColor]}>•</Text>
            <Text style={[styles.text, styles.textColor]}>{item}</Text>
          </View>
        ))}
      </View>
    );
  }

  return Object.entries(content).map(([key, value]) => {
    if (key === 'title') return null;

    return (
      <View key={key} style={[styles.section, { marginLeft: level * 16 }]}>
        {content.title && <Text style={[styles.sectionTitle, styles.textColor]}>{content.title}</Text>}
        <ProcedureContentRenderer content={value} level={level + 1} />
      </View>
    );
  });
};

export default ProcedureContentRenderer;
