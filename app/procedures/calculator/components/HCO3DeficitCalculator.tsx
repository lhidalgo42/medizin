import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useState, useCallback } from 'react';

interface HCO3DeficitCalculatorProps {
  isDark: boolean;
}

export default function HCO3DeficitCalculator({ isDark }: HCO3DeficitCalculatorProps) {
  const [weight, setWeight] = useState('');
  const [currentHCO3, setCurrentHCO3] = useState('');
  const [targetHCO3, setTargetHCO3] = useState('');

  const calculateHCO3Deficit = useCallback(() => {
    const weightValue = parseFloat(weight) || 0;
    const currentHCO3Value = parseFloat(currentHCO3) || 1;
    const targetHCO3Value = parseFloat(targetHCO3) || 1;

    const space = weightValue * (0.4 + 2.6 / currentHCO3Value);
    const deficit = Math.abs(Math.round((targetHCO3Value - currentHCO3Value) * space));

    return deficit;
  }, [weight, currentHCO3, targetHCO3]);

  const hco3Deficit = calculateHCO3Deficit();

  return (
    <View style={styles.calculatorContainer}>
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: isDark ? '#ffffff' : '#000000' }]}>
          HCO3 Deficit Calculator
        </Text>

        {/* Weight */}
        <View style={styles.inputGroup}>
          <Text style={[styles.label, { color: isDark ? '#ffffff' : '#000000' }]}>
            Peso (kg):
          </Text>
          <TextInput
            style={[styles.input, { 
              color: isDark ? '#ffffff' : '#000000',
              backgroundColor: isDark ? '#333333' : '#f5f5f5'
            }]}
            value={weight}
            onChangeText={setWeight}
            keyboardType="numeric"
            placeholder="kg"
            placeholderTextColor={isDark ? '#888888' : '#999999'}
          />
        </View>

        {/* Current HCO3 */}
        <View style={styles.inputGroup}>
          <Text style={[styles.label, { color: isDark ? '#ffffff' : '#000000' }]}>
            HCO3 Paciente (meq/lt):
          </Text>
          <TextInput
            style={[styles.input, { 
              color: isDark ? '#ffffff' : '#000000',
              backgroundColor: isDark ? '#333333' : '#f5f5f5'
            }]}
            value={currentHCO3}
            onChangeText={setCurrentHCO3}
            keyboardType="numeric"
            placeholder="meq/lt"
            placeholderTextColor={isDark ? '#888888' : '#999999'}
          />
        </View>

        {/* Target HCO3 */}
        <View style={styles.inputGroup}>
          <Text style={[styles.label, { color: isDark ? '#ffffff' : '#000000' }]}>
            HCO3 Objetivo (meq/lt):
          </Text>
          <TextInput
            style={[styles.input, { 
              color: isDark ? '#ffffff' : '#000000',
              backgroundColor: isDark ? '#333333' : '#f5f5f5'
            }]}
            value={targetHCO3}
            onChangeText={setTargetHCO3}
            keyboardType="numeric"
            placeholder="meq/lt"
            placeholderTextColor={isDark ? '#888888' : '#999999'}
          />
        </View>

        <View style={styles.formula}>
          <Text style={[styles.formulaText, { color: isDark ? '#ffffff' : '#000000' }]}>
            HCO3 requerido = (HCO3 objetivo - HCO3 paciente) x espacio de HCO3
          </Text>
          <Text style={[styles.formulaText, { color: isDark ? '#ffffff' : '#000000' }]}>
            Espacio de HCO3 = (0,4 + 2,6/HCO3 paciente) x peso
          </Text>
          <Text style={[styles.citation, { color: isDark ? '#ffffff' : '#000000' }]}>
            Nat. Rev. Nephrol. 6, 274–285 (2010)
          </Text>
        </View>

        <View style={styles.results}>
          <Text style={[styles.resultText, { color: isDark ? '#ffffff' : '#000000' }]}>
            HCO3 Requerido: <Text style={styles.resultValue}>{hco3Deficit}</Text> meq
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  calculatorContainer: {
    padding: 16,
  },
  section: {
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  formula: {
    marginTop: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#00000010',
  },
  formulaText: {
    fontSize: 14,
    marginBottom: 8,
  },
  citation: {
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 8,
  },
  results: {
    marginTop: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#007AFF20',
  },
  resultText: {
    fontSize: 16,
    fontWeight: '600',
  },
  resultValue: {
    color: '#20B2AA',
    fontWeight: 'bold',
    fontSize: 30,
  },
});