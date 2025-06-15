import React from 'react';
import { ScrollView, View, ViewStyle, ScrollViewProps } from 'react-native';
import { useTheme } from './ThemeContext';

interface ScrollContainerProps extends ScrollViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
}

export const ScrollContainer: React.FC<ScrollContainerProps> = ({ 
  children, 
  style, 
  contentStyle,
  ...props 
}) => {
  const { colors } = useTheme();
  
  return (
    <ScrollView
      style={[
        {
          flex: 1,
          backgroundColor: colors.background,
        },
        style,
      ]}
      contentContainerStyle={[
        {
          flexGrow: 1,
          padding: 16,
        },
        contentStyle,
      ]}
      showsVerticalScrollIndicator={false}
      {...props}
    >
      {children}
    </ScrollView>
  );
};