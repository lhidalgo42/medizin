export default {
  hypotension: {
    title: 'Hypotension',
    initialCheck: {
      title: 'Check hypotension (adequate cuff)',
      evaluatePoorPerfusion: 'Evaluate signs of poor perfusion:',
      signs: [
        'Capillary refill',
        'Mottling score',
        'Mental status'
      ],
      actions: [
        'Stop hypotensive medications',
        'Secure 2 venous lines',
        'Administer 250-500 ml SF/SR bolus'
      ]
    },
    persistentHypotension: {
      title: 'Persistent Hypotension',
      branches: {
        fever: {
          title: 'Fever/Chills/Elevated inflammatory parameters',
          actions: [
            'Continue volume resuscitation with 250-500 ml boluses',
            '(30 ml/kg total or according to EEI elevation test)',
            'If hypotension persists, start norepinephrine',
            'Evaluate if new SF/SR boluses required',
            'Complete Septic Shock goals:',
            '- Hemodynamics I and II',
            '- Early broad-spectrum antibiotics',
            '- Request Lactate'
          ]
        },
        ventilation: {
          title: 'Ventilation alteration',
          steps: [
            'PE probability',
            'Cautious volume resuscitation',
            'Start norepinephrine',
            'Alert ICU resident for bedside echocardiogram',
            'Chest AngioTAC',
            'Jugular engorgement',
            'Present pulmonary murmur',
            'Cardiac tamponade',
            'Alert ICU Resident'
          ]
        },
        cardiac: {
          title: 'Chest pain/Irregular pulse/Monitor with arrhythmia',
          conditions: {
            tachyarrhythmia: 'Tachyarrhythmia',
            bradyarrhythmia: 'Bradyarrhythmia',
            process: [
              'ECG',
              'AMI',
              'Cardiogenic Shock',
              'Start norepinephrine'
            ]
          }
        },
        bleeding: {
          title: 'Evident loss/Bleeding?',
          checks: [
            'Rectal exam: Melena/rectorrhagia?',
            'Recent Qx?',
            'Recent biopsies?'
          ],
          actions: [
            'Volume resuscitation in 250-1000 ml boluses (according to age)',
            'Request Group/RH Celldyn/INR/TTPK',
            'Consider GR transfusion',
            '* 1st Hcto not always reliable',
            'Reverse anticoagulation and transfuse platelets if necessary',
            'Consider AngioTAC to search for non-evident bleeding'
          ]
        }
      }
    },
    footer: 'Refer to a higher complexity unit'
  },
  hypertensiveCrisis: {
    title: 'Hypertensive Crisis (>180/110)',
    checkOrganDamage: {
      title: 'Check for Target Organ Damage',
      symptoms: [
        'Focal Deficit',
        'Altered Mental Status',
        'Severe Headache',
        'Dyspnea',
        'Chest Pain'
      ]
    },
    withOrganDamage: {
      title: 'With Organ Damage',
      steps: [
        'Request ICU/CCU Transfer',
        'Order: Brain CT without contrast',
        'Order: ECG',
        'Order: Chest X-ray',
        'Order: Chest Angiotac'
      ],
      acutePulmonaryEdema: {
        title: 'If Acute Pulmonary Edema',
        treatment: 'Start before transfer:',
        medications: [
          'NTG',
          'Furosemide'
        ]
      },
      advancedRenalFailure: {
        title: 'Advanced Renal Failure',
        dosing: {
          yes: 'High IV doses (40-80 mg)',
          no: 'Low IV doses (10-20 mg)'
        }
      }
    },
    withoutOrganDamage: {
      title: 'Without Organ Damage',
      asymptomatic: {
        title: 'Asymptomatic',
        previousHTA: {
          title: 'Previous HTA',
          yes: 'Restart previous anti-hypertensive medications',
          no: 'Basic study of secondary causes'
        }
      },
      mildHeadache: {
        title: 'Mild Headache and/or BP >220/120',
        steps: [
          'Reduce external stimuli',
          'Turn off lights',
          'Maintain silence',
          'Analgesia if pain',
          'BZD if anxiety'
        ],
        treatment: {
          title: 'Start Short-Acting Anti-HTA',
          medication: 'Captopril',
          followUp: 'Then titrate medium-acting anti-HTA'
        }
      }
    }
  }
};