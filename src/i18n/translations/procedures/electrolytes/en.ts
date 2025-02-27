export default {
  hyponatremia: {
    title: 'Hyponatremia',
    definition: {
      title: 'Definition',
      text: 'Serum sodium < 135 mEq/L',
      severity: [
        'Mild: 130-134 mEq/L',
        'Moderate: 125-129 mEq/L',
        'Severe: < 125 mEq/L'
      ]
    },
    symptoms: {
      title: 'Clinical Manifestations',
      mild: [
        'Nausea',
        'Headache',
        'Confusion'
      ],
      severe: [
        'Seizures',
        'Coma',
        'Respiratory arrest',
        'Brain herniation'
      ]
    },
    treatment: {
      title: 'Treatment',
      acute: {
        title: 'Acute/Severe Symptomatic',
        steps: [
          'Hypertonic saline 3% (see infusions)',
          'Goal: increase Na by 4-6 mEq/L in first 6h',
          'Maximum increase: 8 mEq/L in 24h',
          'Monitor Na every 2-4h'
        ]
      },
      chronic: {
        title: 'Chronic/Asymptomatic',
        steps: [
          'Fluid restriction',
          'Treat underlying cause',
          'Maximum correction: 6-8 mEq/L per 24h'
        ]
      }
    }
  },
  hypernatremia: {
    title: 'Hypernatremia',
    definition: {
      title: 'Definition',
      text: 'Serum sodium > 145 mEq/L',
      severity: [
        'Mild: 146-150 mEq/L',
        'Moderate: 151-159 mEq/L',
        'Severe: ≥ 160 mEq/L'
      ]
    },
    symptoms: {
      title: 'Clinical Manifestations',
      list: [
        'Thirst',
        'Lethargy',
        'Weakness',
        'Irritability',
        'Seizures',
        'Coma'
      ]
    },
    treatment: {
      title: 'Treatment',
      steps: [
        'Calculate free water deficit',
        'Replace deficit over 48-72h',
        'Maximum decrease: 10 mEq/L per 24h',
        'Monitor Na every 4-6h'
      ]
    }
  },
  hypokalemia: {
    title: 'Hypokalemia',
    definition: {
      title: 'Definition',
      text: 'Serum potassium < 3.5 mEq/L',
      severity: [
        'Mild: 3.0-3.4 mEq/L',
        'Moderate: 2.5-2.9 mEq/L',
        'Severe: < 2.5 mEq/L'
      ]
    },
    symptoms: {
      title: 'Clinical Manifestations',
      list: [
        'Muscle weakness',
        'Fatigue',
        'Constipation',
        'Arrhythmias',
        'ECG changes (U waves, ST depression)'
      ]
    },
    treatment: {
      title: 'Treatment',
      oral: {
        title: 'Oral Replacement',
        text: 'KCl 40-100 mEq/day divided doses'
      },
      iv: {
        title: 'IV Replacement',
        steps: [
          'Maximum rate: 10-20 mEq/h',
          'Maximum concentration: 40 mEq/L peripheral',
          'Monitor K every 4-6h',
          'Monitor ECG in severe cases'
        ]
      }
    }
  },
  hyperkalemia: {
    title: 'Hyperkalemia',
    definition: {
      title: 'Definition',
      text: 'Serum potassium > 5.0 mEq/L',
      severity: [
        'Mild: 5.1-5.9 mEq/L',
        'Moderate: 6.0-6.4 mEq/L',
        'Severe: ≥ 6.5 mEq/L'
      ]
    },
    symptoms: {
      title: 'Clinical Manifestations',
      list: [
        'Muscle weakness',
        'Paralysis',
        'Arrhythmias',
        'ECG changes (peaked T waves, prolonged PR, wide QRS)'
      ]
    },
    treatment: {
      title: 'Treatment',
      membrane: {
        title: 'Membrane Stabilization',
        steps: [
          'Calcium gluconate 10% 10mL IV over 2-3 min',
          'Repeat ECG',
          'Can repeat dose if ECG changes persist'
        ]
      },
      shift: {
        title: 'Intracellular Shift',
        steps: [
          'Regular insulin 10U + D50W 25g IV',
          'Albuterol nebulizer 10-20mg',
          'Sodium bicarbonate if acidotic'
        ]
      },
      elimination: {
        title: 'Elimination',
        steps: [
          'Loop diuretics',
          'Kayexalate 15-30g PO/PR',
          'Consider emergency dialysis'
        ]
      }
    }
  },
  hypocalcemia: {
    title: 'Hypocalcemia',
    definition: {
      title: 'Definition',
      text: 'Corrected calcium < 8.5 mg/dL',
      severity: [
        'Mild: 8.0-8.4 mg/dL',
        'Moderate: 7.0-7.9 mg/dL',
        'Severe: < 7.0 mg/dL'
      ]
    },
    symptoms: {
      title: 'Clinical Manifestations',
      list: [
        'Perioral numbness',
        'Paresthesias',
        'Tetany',
        'Chvostek sign',
        'Trousseau sign',
        'QT prolongation'
      ]
    },
    treatment: {
      title: 'Treatment',
      acute: {
        title: 'Acute Symptomatic',
        steps: [
          'Calcium gluconate (see infusions)',
          'Monitor calcium every 4-6h',
          'Monitor ECG'
        ]
      },
      chronic: {
        title: 'Chronic/Asymptomatic',
        steps: [
          'Oral calcium + vitamin D',
          'Treat underlying cause'
        ]
      }
    }
  },
  hypercalcemia: {
    title: 'Hypercalcemia',
    definition: {
      title: 'Definition',
      text: 'Corrected calcium > 10.5 mg/dL',
      severity: [
        'Mild: 10.5-11.9 mg/dL',
        'Moderate: 12.0-13.9 mg/dL',
        'Severe: ≥ 14.0 mg/dL'
      ]
    },
    symptoms: {
      title: 'Clinical Manifestations',
      list: [
        'Confusion',
        'Weakness',
        'Constipation',
        'Polyuria',
        'Shortened QT',
        'Renal stones'
      ]
    },
    treatment: {
      title: 'Treatment',
      initial: {
        title: 'Initial Management',
        steps: [
          'IV fluids: NS 200-300 mL/h',
          'Monitor urine output',
          'Monitor electrolytes every 4-6h'
        ]
      },
      medications: {
        title: 'Medications',
        list: [
          'Calcitonin 4-8 U/kg SC q12h',
          'Bisphosphonates',
          'Consider glucocorticoids'
        ]
      }
    }
  }
};
