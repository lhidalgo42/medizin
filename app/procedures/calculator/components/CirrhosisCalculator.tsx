import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState, useCallback } from 'react';

interface CirrhosisCalculatorProps {
  isDark: boolean;
}

export default function CirrhosisCalculator({ isDark }: CirrhosisCalculatorProps) {
  const [encephalopathy, setEncephalopathy] = useState('1');
  const [ascites, setAscites] = useState('1');
  const [bilirubin, setBilirubin] = useState('');
  const [albumin, setAlbumin] = useState('');
  const [inr, setInr] = useState('');
  const [creatinine, setCreatinine] = useState('');
  const [sodium, setSodium] = useState('');
  const [dialysis, setDialysis] = useState(false);

  const calculateChildPughScore = useCallback(() => {
    let score = 0;
    
    // Encephalopathy points
    score += parseInt(encephalopathy) || 0;
    
    // Ascites points
    score += parseInt(ascites) || 0;
    
    // Bilirubin points
    const bilirubinValue = parseFloat(bilirubin);
    if (bilirubinValue < 2) score += 1;
    else if (bilirubinValue <= 3) score += 2;
    else score += 3;
    
    // Albumin points
    const albuminValue = parseFloat(albumin);
    if (albuminValue > 3.5) score += 1;
    else if (albuminValue >= 2.8) score += 2;
    else score += 3;
    
    // INR points
    const inrValue = parseFloat(inr);
    if (inrValue < 1.7) score += 1;
    else if (inrValue <= 2.3) score += 2;
    else score += 3;
    
    return score;
  }, [encephalopathy, ascites, bilirubin, albumin, inr]);

  const calculateMELD = useCallback(() => {
    const bilirubinValue = Math.max(parseFloat(bilirubin) || 1, 1);
    const inrValue = Math.max(parseFloat(inr) || 1, 1);
    let creatinineValue = Math.min(Math.max(parseFloat(creatinine) || 1, 1), 4);
    
    if (dialysis) {
      creatinineValue = 4.0;
    }

    const score = (
      9.57 * Math.log(creatinineValue) +
      3.78 * Math.log(bilirubinValue) +
      11.2 * Math.log(inrValue) +
      6.43
    );

    return Math.round(score);
  }, [bilirubin, inr, creatinine, dialysis]);

  const calculateMELDNa = useCallback(() => {
    const meldScore = calculateMELD();
    const sodiumValue = Math.min(Math.max(parseFloat(sodium) || 125, 125), 140);

    const score = meldScore - sodium - (0.025 * meldScore * (140 - sodiumValue)) + 140;
    return Math.round(score);
  }, [calculateMELD, sodium]);

  const getChildPughClass = (score: number) => {
    if (score <= 6) return 'A';
    if (score <= 9) return 'B';
    return 'C';
  };

  const childPughScore = calculateChildPughScore();
  const meldScore = calculateMELD();
  const meldNaScore = calculateMELDNa();

  return (
    <View style={styles.calculatorContainer}>
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: isDark ? '#ffffff' : '#000000' }]}>
          Child-Pugh Score
        </Text>
        
        {/* Bilirubin */}
        <View style={styles.inputGroup}>
          <Text style={[styles.label, { color: isDark ? '#ffffff' : '#000000' }]}>
            Bilirubin (mg/dL):
          </Text>
          <TextInput
            style={[styles.input, { 
              color: isDark ? '#ffffff' : '#000000',
              backgroundColor: isDark ? '#333333' : '#f5f5f5'
            }]}
            value={bilirubin}
            onChangeText={setBilirubin}
            keyboardType="numeric"
            placeholder="mg/dL"
            placeholderTextColor={isDark ? '#888888' : '#999999'}
          />
        </View>

        {/* Albumin */}
        <View style={styles.inputGroup}>
          <Text style={[styles.label, { color: isDark ? '#ffffff' : '#000000' }]}>
            Albumin (g/dL):
          </Text>
          <TextInput
            style={[styles.input, { 
              color: isDark ? '#ffffff' : '#000000',
              backgroundColor: isDark ? '#333333' : '#f5f5f5'
            }]}
            value={albumin}
            onChangeText={setAlbumin}
            keyboardType="numeric"
            placeholder="g/dL"
            placeholderTextColor={isDark ? '#888888' : '#999999'}
          />
        </View>

        {/* INR */}
        <View style={styles.inputGroup}>
          <Text style={[styles.label, { color: isDark ? '#ffffff' : '#000000' }]}>
            INR:
          </Text>
          <TextInput
            style={[styles.input, { 
              color: isDark ? '#ffffff' : '#000000',
              backgroundColor: isDark ? '#333333' : '#f5f5f5'
            }]}
            value={inr}
            onChangeText={setInr}
            keyboardType="numeric"
            placeholder="INR"
            placeholderTextColor={isDark ? '#888888' : '#999999'}
          />
        </View>

        {/* Creatinine */}
        <View style={styles.inputGroup}>
          <Text style={[styles.label, { color: isDark ? '#ffffff' : '#000000' }]}>
            Creatinine (mg/dL):
          </Text>
          <TextInput
            style={[styles.input, { 
              color: isDark ? '#ffffff' : '#000000',
              backgroundColor: isDark ? '#333333' : '#f5f5f5'
            }]}
            value={creatinine}
            onChangeText={setCreatinine}
            keyboardType="numeric"
            placeholder="mg/dL"
            placeholderTextColor={isDark ? '#888888' : '#999999'}
          />
        </View>

        {/* Sodium */}
        <View style={styles.inputGroup}>
          <Text style={[styles.label, { color: isDark ? '#ffffff' : '#000000' }]}>
            Sodium (mEq/L):
          </Text>
          <TextInput
            style={[styles.input, { 
              color: isDark ? '#ffffff' : '#000000',
              backgroundColor: isDark ? '#333333' : '#f5f5f5'
            }]}
            value={sodium}
            onChangeText={setSodium}
            keyboardType="numeric"
            placeholder="mEq/L"
            placeholderTextColor={isDark ? '#888888' : '#999999'}
          />
        </View>

        {/* Dialysis */}
        <View style={styles.inputGroup}>
          <Text style={[styles.label, { color: isDark ? '#ffffff' : '#000000' }]}>
            Diálisis ≥ 2 sem:
          </Text>
          <View style={styles.radioGroup}>
            <TouchableOpacity
              style={styles.radioOption}
              onPress={() => setDialysis(true)}
            >
              <View style={[
                styles.radioButton,
                dialysis && styles.radioButtonSelected,
                { borderColor: isDark ? '#ffffff' : '#000000' }
              ]}>
                {dialysis && <View style={[
                  styles.radioButtonInner,
                  { backgroundColor: isDark ? '#ffffff' : '#000000' }
                ]} />}
              </View>
              <Text style={[styles.radioText, { color: isDark ? '#ffffff' : '#000000' }]}>
                Si
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.radioOption}
              onPress={() => setDialysis(false)}
            >
              <View style={[
                styles.radioButton,
                !dialysis && styles.radioButtonSelected,
                { borderColor: isDark ? '#ffffff' : '#000000' }
              ]}>
                {!dialysis && <View style={[
                  styles.radioButtonInner,
                  { backgroundColor: isDark ? '#ffffff' : '#000000' }
                ]} />}
              </View>
              <Text style={[styles.radioText, { color: isDark ? '#ffffff' : '#000000' }]}>
                No
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Ascites */}
        <View style={styles.inputGroup}>
          <Text style={[styles.label, { color: isDark ? '#ffffff' : '#000000' }]}>
            Ascites:
          </Text>
          <View style={[
            styles.pickerContainer,
            { backgroundColor: isDark ? '#333333' : '#f5f5f5' }
          ]}>
            <Picker
              selectedValue={ascites}
              onValueChange={(itemValue) => setAscites(itemValue)}
              style={[
                styles.picker,
                { color: isDark ? '#ffffff' : '#000000' }
              ]}
              dropdownIconColor={isDark ? '#ffffff' : '#000000'}
            >
              <Picker.Item label="Ausente" value="1" />
              <Picker.Item label="Leve-mod" value="2" />
              <Picker.Item label="Severa" value="3" />
            </Picker>
          </View>
        </View>

        {/* Encephalopathy */}
        <View style={styles.inputGroup}>
          <Text style={[styles.label, { color: isDark ? '#ffffff' : '#000000' }]}>
            Encephalopathy:
          </Text>
          <View style={[
            styles.pickerContainer,
            { backgroundColor: isDark ? '#333333' : '#f5f5f5' }
          ]}>
            <Picker
              selectedValue={encephalopathy}
              onValueChange={(itemValue) => setEncephalopathy(itemValue)}
              style={[
                styles.picker,
                { color: isDark ? '#ffffff' : '#000000' }
              ]}
              dropdownIconColor={isDark ? '#ffffff' : '#000000'}
            >
              <Picker.Item label="Ausente" value="1" />
              <Picker.Item label="Grado 1-2" value="2" />
              <Picker.Item label="Grado 3-4" value="3" />
            </Picker>
          </View>
        </View>

        <View style={styles.results}>
          <Text style={[styles.resultText, { color: isDark ? '#ffffff' : '#000000' }]}>
            Child-Pugh Score: {childPughScore} (Class {getChildPughClass(childPughScore)})
          </Text>
          <Text style={[styles.resultText, { color: isDark ? '#ffffff' : '#000000' }]}>
            MELD Score: {meldScore}
          </Text>
          <Text style={[styles.resultText, { color: isDark ? '#ffffff' : '#000000' }]}>
            MELD-Na Score: {meldNaScore}
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
  pickerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  picker: {
    height: 40,
    ...Platform.select({
      ios: {
        paddingHorizontal: 12,
      },
      android: {
        paddingHorizontal: 0,
      },
    }),
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    borderWidth: 2,
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  radioText: {
    fontSize: 16,
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
    marginBottom: 8,
  },
});