import { Stack } from 'expo-router';
import i18n from '@/src/i18n';
import ProcedureContentRenderer from '../../components/ProcedureContentRenderer';
import { ProcedureLayout } from '../../components/ProcedureLayout';
import { Card } from '../../components/Card';
import { useTheme } from '../../components/ThemeContext';

export default function BicarbonateProcedureScreen() {
  const { colors } = useTheme();
  const data = i18n.t('procedures.infusions.bicarbonate', { returnObjects: true }) as any;

  return (
    <ProcedureLayout>
      <Stack.Screen 
        options={{ 
          title: data.title,
          headerStyle: {
            backgroundColor: colors.card,
          },
          headerTintColor: colors.text,
        }} 
      />
      <Card>
        <ProcedureContentRenderer content={data} />
      </Card>
    </ProcedureLayout>
  );
}

