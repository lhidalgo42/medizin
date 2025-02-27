export default {
  hypoglycemia: {
    title: 'Hypoglycemia',
    definition: {
      title: 'Definition',
      text: 'Blood glucose < 70 mg/dL (< 3.9 mmol/L)',
      severity: [
        'Level 1: 54-70 mg/dL (3.0-3.9 mmol/L)',
        'Level 2: < 54 mg/dL (< 3.0 mmol/L)',
        'Level 3: Severe cognitive impairment requiring external assistance'
      ]
    },
    symptoms: {
      title: 'Clinical Manifestations',
      autonomic: {
        title: 'Autonomic',
        list: [
          'Tremor',
          'Palpitations',
          'Anxiety',
          'Sweating',
          'Hunger'
        ]
      },
      neuroglycopenic: {
        title: 'Neuroglycopenic',
        list: [
          'Confusion',
          'Weakness',
          'Visual disturbances',
          'Seizures',
          'Loss of consciousness'
        ]
      }
    },
    treatment: {
      title: 'Treatment',
      conscious: {
        title: 'Conscious Patient',
        list: [
          'Give 15-20g fast-acting carbohydrates:',
          '- 4 glucose tablets',
          '- 150 mL fruit juice',
          '- 150 mL regular soda',
          'Recheck glucose in 15 minutes',
          'Repeat treatment if glucose still < 70 mg/dL'
        ]
      },
      unconscious: {
        title: 'Unconscious Patient',
        list: [
          'IV Dextrose 50%: 25-50 mL',
          'OR Glucagon:',
          '- 1 mg IM/SC/IV',
          '- May repeat in 15 minutes',
          'Monitor glucose every 15 minutes until stable'
        ]
      },
      maintenance: {
        title: 'Maintenance',
        list: [
          'Once glucose > 70 mg/dL:',
          'Give complex carbohydrate + protein snack',
          'Review cause of hypoglycemia',
          'Adjust diabetes medications if needed'
        ]
      }
    }
  },
  diabeticKetoacidosis: {
    title: 'Diabetic Ketoacidosis (DKA)',
    definition: {
      title: 'Diagnostic Criteria',
      list: [
        'Hyperglycemia (> 250 mg/dL)',
        'Ketosis',
        'Acidosis (pH < 7.3 or bicarbonate < 15 mEq/L)'
      ]
    },
    assessment: {
      title: 'Initial Assessment',
      vital: {
        title: 'Vital Signs',
        list: [
          'Blood pressure',
          'Heart rate',
          'Respiratory rate',
          'Temperature',
          'Mental status'
        ]
      },
      laboratory: {
        title: 'Laboratory Tests',
        list: [
          'Blood glucose',
          'Electrolytes',
          'Blood gases',
          'Ketones',
          'Complete blood count',
          'Renal function'
        ]
      }
    },
    treatment: {
      title: 'Treatment',
      fluids: {
        title: 'Fluid Resuscitation',
        list: [
          'Initial: 1-1.5 L/hr normal saline',
          'Subsequent: Based on hemodynamics',
          'Monitor fluid balance carefully'
        ]
      },
      insulin: {
        title: 'Insulin Therapy',
        list: [
          'Bolus: 0.1 units/kg',
          'Infusion: 0.1 units/kg/hr',
          'Titrate to glucose decrease of 50-75 mg/dL/hr'
        ]
      },
      electrolytes: {
        title: 'Electrolyte Replacement',
        list: [
          'Potassium: Keep > 4 mEq/L',
          'Bicarbonate: Consider if pH < 6.9',
          'Phosphate: Replace if < 1 mg/dL'
        ]
      },
      monitoring: {
        title: 'Monitoring',
        list: [
          'Hourly glucose',
          'Electrolytes every 2-4 hours',
          'Input/output',
          'Mental status',
          'Anion gap'
        ]
      }
    }
  },
  hyperosmolarState: {
    title: 'Hyperosmolar Hyperglycemic State (HHS)',
    definition: {
      title: 'Diagnostic Criteria',
      list: [
        'Severe hyperglycemia (> 600 mg/dL)',
        'Serum osmolality > 320 mOsm/kg',
        'No significant ketosis/acidosis',
        'Altered mental status'
      ]
    },
    assessment: {
      title: 'Initial Assessment',
      clinical: {
        title: 'Clinical Evaluation',
        list: [
          'Mental status',
          'Hydration status',
          'Precipitating factors',
          'Comorbidities'
        ]
      },
      laboratory: {
        title: 'Laboratory Tests',
        list: [
          'Blood glucose',
          'Serum osmolality',
          'Electrolytes',
          'Renal function',
          'Complete blood count'
        ]
      }
    },
    treatment: {
      title: 'Treatment',
      fluids: {
        title: 'Fluid Resuscitation',
        list: [
          'Initial: 1-1.5 L/hr normal saline',
          'Adjust based on:',
          '- Hemodynamic status',
          '- Serum sodium',
          '- Osmolality'
        ]
      },
      insulin: {
        title: 'Insulin Therapy',
        list: [
          'Start after initial fluid resuscitation',
          'Lower dose than DKA:',
          '- 0.05-0.1 units/kg/hr',
          'Target glucose decrease: 50-75 mg/dL/hr'
        ]
      },
      electrolytes: {
        title: 'Electrolyte Management',
        list: [
          'Monitor potassium closely',
          'Replace as needed',
          'Watch for hypernatremia'
        ]
      },
      monitoring: {
        title: 'Monitoring',
        list: [
          'Hourly glucose',
          'Electrolytes every 2-4 hours',
          'Osmolality',
          'Mental status',
          'Fluid balance'
        ]
      },
      complications: {
        title: 'Prevent Complications',
        list: [
          'DVT prophylaxis',
          'Monitor for cerebral edema',
          'Watch for cardiac complications'
        ]
      }
    }
  }
};
