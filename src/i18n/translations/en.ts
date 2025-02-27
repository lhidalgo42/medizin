export default {
  common: {
    loading: 'Loading...',
    error: 'An error occurred',
    retry: 'Retry',
    back: 'Back',
  },
  categories: {
    falls: 'Falls',
    infusions: 'Infusions',
    fever: 'Fever',
    bloodPressure: 'Blood Pressure',
    opioids: 'Opioids',
    drugs: 'Drugs',
    bleeding: 'Bleeding',
    cardiopulmonaryArrest: 'Cardiopulmonary Arrest',
    glycemia: 'Glycemia',
    transfusions: 'Transfusions',
    tachyarrhythmias: 'Tachyarrhythmias',
    rapidIntubation: 'Rapid Intubation',
    tacoAndHeparin: 'TACO and Heparin',
    electrolytes: 'Electrolytes',
    calculator: 'Medical Calculator',
  },
  procedures: {
    falls: {
      syncope: 'Syncope',
      delirium: 'Delirium',
      dizziness: 'Dizziness (Orthostatic)',
      neurologicalDeficit: 'Neurological Deficit',
      stumble: 'Stumble',
      headInjury: 'Head Injury and Other Areas',
    },
    infusions: {
      saline: 'Saline Solution Infusion',
      calcium: 'Calcium Infusion',
      bicarbonate: {
        title: 'Bicarbonate Infusion',
        peripheralRoute: {
          title: 'Peripheral Route',
          steps: [
            'Remove 250cc bidistilled water',
            'Add 250cc NaHCO3 2/3 M solution'
          ],
          result: '1L of 1/6 M Solution',
          specifications: [
            'Osm: 333 mosm/lt (similar to SF 0.9%)',
            'HCO3: 166.7 meq/lt (0.16 meq/ml)',
            'Na: 166.7 meq/lt'
          ]
        },
        centralRoute: {
          title: 'Central Route (CVC)',
          instructions: 'Use NaHCO3 2/3 M solution',
          result: '1L of 2/3 M Solution',
          specifications: [
            'Osm: 1333 mosm/lt',
            'HCO3: 666.7 meq/lt (0.66 meq/ml)',
            'Na: 666.7 meq/lt'
          ]
        },
        considerations: {
          title: 'Consider HCO3 in: PH < 7.1 with HCO3 <6-10',
          note: '(especially in acute hyperchloremic metabolic acidosis)',
          guidelines: [
            'Calculate HCO3 deficit (use only as estimation). Goal: PH 7.2',
            '50% of deficit in 4 hrs (< 1-2 meq/kg), rest in 24-48 hrs',
            'In cardiorespiratory arrest: 1 meq/kg and recheck',
            '1/6 M: unrestricted administration. Watch for volume overload',
            '2/3 M: rate according to natremia (no more than 0.5 meq/lt/hr Na increase)',
            'Monitor: PH, PaCO2, Na, K, ionic Ca'
          ]
        },
        ketoacidosis: {
          title: 'Ketoacidosis (if PH < 6.9)',
          instructions: [
            '150 ml HCO3 2/3 M or 100 ml HCO3 8.4%',
            'Dilute in: 400 ml bidistilled water',
            'Add: 20 meq K (if K < 5.3 meq/lt)',
            '(2 amp KCL=26 meq / 2 amp K monophosphate: 22 meq)',
            'Infuse in: 2 hrs',
            'Repeat if PH < 6.9 persists'
          ]
        }
      }
    },
    fever: {
      mainTitle: 'Fever Management',
      phlebitis: 'Phlebitis',
      pneumonia: 'Pneumonia',
      urinaryInfections: 'Urinary Tract Infections (CPU?)',
      diarrhea: 'Diarrhea',
      cvc: 'Central Venous Catheter (CVC) Issues',
      arthritis: 'Arthritis',
      reminder: 'Remember: Do not assume the fever is due to drugs or a tumoral cause during the shift.',
    },
    bloodPressure: {
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
    },
    opioids: {
      tramadol: 'Tramadol',
      fentanyl: 'Fentanyl',
      methadone: 'Methadone',
      morphine: 'Morphine',
      buprenorphine: 'Buprenorphine',
    },
    drugs: {
      adenosine: 'Adenosine',
      amiodarone: 'Amiodarone',
      lanatoside: 'Lanatoside C',
      nitroglycerin: 'Nitroglycerin',
      noradrenaline: 'Noradrenaline',
      labetalol: 'Labetalol',
      nitroprusside: 'Nitroprusside',
      dobutamine: 'Dobutamine',
      milrinone: 'Milrinone',
    },
    bleeding: {
      reversal: 'Reversing TACO, Dabigatran, and Heparin effects',
      transfusions: 'Transfusing platelets, managing fibrinogen deficits, and handling hemophilia protocols',
    },
    glycemia: {
      hypoglycemia: 'Hypoglycemia',
      ketoacidosis: 'Ketoacidosis in Hyperosmolar Syndrome',
    },
    transfusions: {
      hemocomponents: 'Blood Components',
      reactions: 'Transfusion Reactions',
    },
    tacoAndHeparin: {
      inr: 'INR',
      ttpk: 'TTPK',
    },
    electrolytes: {
      hyponatremia: 'Hyponatremia',
      hypernatremia: 'Hypernatremia',
      hypokalemia: 'Hypokalemia',
      hyperkalemia: 'Hyperkalemia',
      hypocalcemia: 'Hypocalcemia',
      hypercalcemia: 'Hypercalcemia',
    },
    calculator: {
      cirrhosis: 'Cirrhosis Assessment (Child-Pugh, MELD, MELD Na)',
      hco3Deficit: 'HCO3 Deficit',
      h2oDeficit: 'H2O Deficit',
      qtInterval: 'Corrected QT Interval (Bazett/Fridericia)',
      correctedCalcium: 'Corrected Calcium',
      renalFunction: 'Renal Function (CKD-EPI/Cockcroft-Gault)',
      plasmaOsmolarity: 'Plasma Osmolarity',
      cvcPosition: 'CVC Positioning',
    },
  },
  settings: {
    title: 'Settings',
    theme: 'Theme',
    themeLight: 'Light',
    themeDark: 'Dark',
    themeSystem: 'System',
  },
};
