import React from 'react';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from './ThemeContext';
import i18n from '@/src/i18n';

interface BackButtonProps {
  style?: ViewStyle;
  onPress?: () => void;
}

export const BackButton: React.FC<BackButtonProps> = ({ style, onPress }) => {
  const router = useRouter();
  const { colors } = useTheme();
  
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      router.back();
    }
  };
  
  return (
    <TouchableOpacity
      style={[
        {
          padding: 16,
          borderTopWidth: 1,
          borderTopColor: colors.border,
          backgroundColor: colors.background,
        },
        style,
      ]}
      onPress={handlePress}
    >
      <Text style={{ color: colors.primary, fontSize: 16, textAlign: 'center' }}>
        {i18n.t('common.back')}
      </Text>
    </TouchableOpacity>
  );
};