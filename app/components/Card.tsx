import React from 'react';
import { View, ViewStyle } from 'react-native';
import { useTheme } from './ThemeContext';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const Card: React.FC<CardProps> = ({ children, style }) => {
  const { colors, shadows } = useTheme();
  
  return (
    <View
      style={[
        {
          padding: 16,
          borderRadius: 12,
          marginBottom: 16,
          backgroundColor: colors.card,
          ...shadows.card,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};