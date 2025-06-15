import { View, Text } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { ProcedureLayout, Card, useTheme } from '@/app/components';
import { commonStyles } from '@/app/styles/commonStyles';
import i18n from '@/src/i18n';
import ProcedureContentRenderer from '@/app/components/ProcedureContentRenderer';

export default function ProcedureScreen() {
  const { category, procedure } = useLocalSearchParams<{ category: string; procedure: string }>();
  const { colors } = useTheme();
  
  // Get procedure data from translations
  const procedureData = i18n.t(`procedures.${category}.${procedure}`, { returnObjects: true });
  
  if (!procedureData || typeof procedureData !== 'object') {
    return (
      <ProcedureLayout>
        <Stack.Screen options={{ title: 'Procedure Not Found' }} />
        <Card>
          <Text style={{ color: colors.text }}>Procedure not found</Text>
        </Card>
      </ProcedureLayout>
    );
  }
  
  return (
    <ProcedureLayout>
      <Stack.Screen 
        options={{ 
          title: procedureData.title || procedure,
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.text,
        }} 
      />
      <Card>
        <ProcedureContentRenderer content={procedureData} />
      </Card>
    </ProcedureLayout>
  );
}