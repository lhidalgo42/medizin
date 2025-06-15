import { View, Text } from 'react-native';
import { Stack } from 'expo-router';
import i18n from '@/src/i18n';
import { ProcedureLayout, Card, useTheme } from '@/app/components';
import { commonStyles } from '@/app/styles/commonStyles';

export default function HypotensionScreen() {
  const { colors } = useTheme();
  const data = i18n.t('procedures.bloodPressure.hypotension', { returnObjects: true });

  const renderContent = (content: any, level = 0) => {
    if (typeof content === 'string') {
      return (
        <Text style={{ color: colors.text, marginBottom: 8 }}>
          {content}
        </Text>
      );
    }

    if (Array.isArray(content)) {
      return (
        <View>
          {content.map((item, index) => (
            <View key={index} style={[commonStyles.flexRow, commonStyles.listItem]}>
              <Text style={[commonStyles.listItemBullet, { color: colors.text }]}>•</Text>
              <Text style={{ color: colors.text, flex: 1 }}>
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
        <View key={key} style={{ marginTop: 12, marginLeft: level * 16 }}>
          {content.title && (
            <Text style={[commonStyles.sectionTitle, { color: colors.text }]}>
              {content.title}
            </Text>
          )}
          {renderContent(value, level + 1)}
        </View>
      );
    });
  };

  return (
    <ProcedureLayout>
      <Stack.Screen 
        options={{ 
          title: data.title,
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.text,
        }} 
      />
      <Card>
        {renderContent(data)}
      </Card>
    </ProcedureLayout>
  );
}
