import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { ScrollContainer } from './ScrollContainer';
import { BackButton } from './BackButton';
import { useTheme } from './ThemeContext';

interface ProcedureLayoutProps {
  children: React.ReactNode;
  showBackButton?: boolean;
  onBackPress?: () => void;
}

export const ProcedureLayout: React.FC<ProcedureLayoutProps> = ({ 
  children, 
  showBackButton = true,
  onBackPress 
}) => {
  const { colors } = useTheme();
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={{ flex: 1 }}>
        <ScrollContainer>
          {children}
        </ScrollContainer>
        {showBackButton && <BackButton onPress={onBackPress} />}
      </View>
    </SafeAreaView>
  );
};