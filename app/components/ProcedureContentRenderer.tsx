import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from './ThemeContext';
import { commonStyles } from '../styles/commonStyles';

interface Props {
  content: any;
  level?: number;
}

const ProcedureContentRenderer: React.FC<Props> = ({ content, level = 0 }) => {
  const { colors } = useTheme();

  if (typeof content === 'string') {
    return <Text style={[{ fontSize: 14, flex: 1, color: colors.text }]}>{content}</Text>;
  }

  if (Array.isArray(content)) {
    return (
      <View style={commonStyles.mt8}>
        {content.map((item, index) => (
          <View key={index} style={[commonStyles.flexRow, commonStyles.mb8, { alignItems: 'flex-start' }]}>
            <Text style={[commonStyles.listItemBullet, { color: colors.text }]}>•</Text>
            <Text style={[{ fontSize: 14, flex: 1, color: colors.text }]}>{item}</Text>
          </View>
        ))}
      </View>
    );
  }

  return Object.entries(content).map(([key, value]) => {
    if (key === 'title') return null;

    return (
      <View key={key} style={[commonStyles.mt16, { marginLeft: level * 16 }]}>
        {content.title && <Text style={[commonStyles.sectionTitle, { color: colors.text }]}>{content.title}</Text>}
        <ProcedureContentRenderer content={value} level={level + 1} />
      </View>
    );
  });
};

export default ProcedureContentRenderer;
