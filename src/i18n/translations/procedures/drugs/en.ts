export default {
  adenosine: {
    title: 'Adenosine',
    description: {
      title: 'Description',
      text: 'Endogenous nucleoside that slows AV nodal conduction'
    },
    indications: {
      title: 'Indications',
      list: [
        'PSVT (including AVNRT and AVRT)',
        'Diagnostic tool for wide complex tachycardias'
      ]
    },
    dosage: {
      title: 'Dosage',
      initial: {
        title: 'Initial Dose',
        list: [
          '6 mg rapid IV push',
          'Follow immediately with rapid saline flush'
        ]
      },
      subsequent: {
        title: 'Subsequent Doses',
        list: [
          '12 mg if needed after 1-2 minutes',
          'May repeat 12 mg once more'
        ]
      }
    },
    administration: {
      title: 'Administration',
      list: [
        'Use large proximal vein or central line',
        'Elevate extremity during administration',
        'Warn patient about transient side effects'
      ]
    },
    contraindications: {
      title: 'Contraindications',
      list: [
        'Second or third-degree heart block',
        'Sick sinus syndrome',
        'Severe asthma or COPD',
        'Pre-excited atrial fibrillation'
      ]
    },
    sideEffects: {
      title: 'Side Effects',
      list: [
        'Chest pain',
        'Dyspnea',
        'Flushing',
        'Brief asystole',
        'Bronchospasm'
      ]
    }
  },
  amiodarone: {
    title: 'Amiodarone',
    description: {
      title: 'Description',
      text: 'Class III antiarrhythmic with multiple channel effects'
    },
    indications: {
      title: 'Indications',
      list: [
        'VF/pulseless VT',
        'Stable VT',
        'Atrial fibrillation',
        'Atrial flutter'
      ]
    },
    dosage: {
      title: 'Dosage',
      cardiac: {
        title: 'Cardiac Arrest',
        list: [
          'Initial: 300 mg IV bolus',
          'Second dose: 150 mg IV bolus'
        ]
      },
      stable: {
        title: 'Stable Patient',
        list: [
          'Loading: 150 mg over 10 minutes',
          'Follow with: 1 mg/min for 6 hours',
          'Then: 0.5 mg/min for 18 hours'
        ]
      }
    },
    contraindications: {
      title: 'Contraindications',
      list: [
        'Cardiogenic shock',
        'Severe sinus node dysfunction',
        'Second or third-degree heart block',
        'Severe hepatic disease'
      ]
    },
    sideEffects: {
      title: 'Side Effects',
      acute: {
        title: 'Acute',
        list: [
          'Hypotension',
          'Bradycardia',
          'Heart block',
          'Phlebitis'
        ]
      },
      chronic: {
        title: 'Chronic',
        list: [
          'Pulmonary toxicity',
          'Thyroid dysfunction',
          'Hepatotoxicity',
          'Corneal deposits'
        ]
      }
    }
  },
  lanatoside: {
    title: 'Lanatoside C',
    description: {
      title: 'Description',
      text: 'Cardiac glycoside with positive inotropic effects'
    },
    indications: {
      title: 'Indications',
      list: [
        'Atrial fibrillation with rapid ventricular response',
        'Atrial flutter',
        'Heart failure'
      ]
    },
    dosage: {
      title: 'Dosage',
      loading: {
        title: 'Loading Dose',
        list: [
          'Initial: 0.4-0.8 mg IV',
          'May repeat 0.2 mg every 2-4 hours',
          'Maximum total: 1.6 mg in 24 hours'
        ]
      },
      maintenance: {
        title: 'Maintenance',
        list: [
          '0.1-0.2 mg daily',
          'Adjust based on response and renal function'
        ]
      }
    },
    contraindications: {
      title: 'Contraindications',
      list: [
        'Ventricular tachycardia',
        'Complete heart block',
        'Hypertrophic cardiomyopathy',
        'Digitalis toxicity'
      ]
    },
    sideEffects: {
      title: 'Side Effects',
      list: [
        'Nausea/vomiting',
        'Cardiac arrhythmias',
        'Visual disturbances',
        'Confusion',
        'Hyperkalemia'
      ]
    }
  },
  nitroglycerin: {
    title: 'Nitroglycerin',
    description: {
      title: 'Description',
      text: 'Nitrate that causes vasodilation and reduces preload/afterload'
    },
    indications: {
      title: 'Indications',
      list: [
        'Acute coronary syndrome',
        'Acute pulmonary edema',
        'Hypertensive emergency',
        'Angina pectoris'
      ]
    },
    dosage: {
      title: 'Dosage',
      sublingual: {
        title: 'Sublingual',
        list: [
          '0.4 mg tablet',
          'May repeat every 5 minutes',
          'Maximum: 3 doses'
        ]
      },
      iv: {
        title: 'IV Infusion',
        list: [
          'Start: 5-10 mcg/min',
          'Titrate by 5-10 mcg/min every 5-10 minutes',
          'Usual range: 10-200 mcg/min'
        ]
      }
    },
    contraindications: {
      title: 'Contraindications',
      list: [
        'Hypotension (SBP < 90 mmHg)',
        'Right ventricular infarction',
        'Phosphodiesterase inhibitor use',
        'Severe aortic stenosis'
      ]
    },
    sideEffects: {
      title: 'Side Effects',
      list: [
        'Headache',
        'Hypotension',
        'Tachycardia',
        'Flushing',
        'Methemoglobinemia (rare)'
      ]
    }
  },
  noradrenaline: {
    title: 'Noradrenaline',
    description: {
      title: 'Description',
      text: 'Potent alpha-adrenergic agonist with some beta-1 activity'
    },
    indications: {
      title: 'Indications',
      list: [
        'Septic shock',
        'Cardiogenic shock',
        'Vasodilatory shock',
        'Post-cardiac arrest'
      ]
    },
    dosage: {
      title: 'Dosage',
      preparation: {
        title: 'Preparation',
        text: '4 mg in 250 mL D5W or NS (16 mcg/mL)'
      },
      administration: {
        title: 'Administration',
        list: [
          'Start: 0.01-0.03 mcg/kg/min',
          'Titrate to MAP goal',
          'Usual range: 0.01-0.5 mcg/kg/min',
          'Maximum: 1 mcg/kg/min'
        ]
      }
    },
    contraindications: {
      title: 'Contraindications',
      list: [
        'Hypovolemia (must correct first)',
        'Mesenteric/peripheral vascular thrombosis'
      ]
    },
    sideEffects: {
      title: 'Side Effects',
      list: [
        'Arrhythmias',
        'Tissue ischemia',
        'Hypertension',
        'Anxiety/tremor',
        'Extravasation injury'
      ]
    }
  },
  labetalol: {
    title: 'Labetalol',
    description: {
      title: 'Description',
      text: 'Combined alpha and beta blocker (1:3 ratio IV, 1:7 ratio oral)'
    },
    indications: {
      title: 'Indications',
      list: [
        'Hypertensive emergency',
        'Hypertensive urgency',
        'Aortic dissection',
        'Pre-eclampsia/eclampsia'
      ]
    },
    dosage: {
      title: 'Dosage',
      iv: {
        title: 'IV Push',
        list: [
          'Initial: 10-20 mg over 2 minutes',
          'Repeat: 20-80 mg every 10 minutes',
          'Maximum single dose: 80 mg',
          'Maximum total: 300 mg'
        ]
      },
      infusion: {
        title: 'IV Infusion',
        list: [
          'Initial: 0.5-2 mg/min',
          'Titrate to response',
          'Maximum: 300 mg/24 hours'
        ]
      }
    },
    contraindications: {
      title: 'Contraindications',
      list: [
        'Severe bradycardia',
        'Heart block greater than first degree',
        'Cardiogenic shock',
        'Severe bronchospastic disease'
      ]
    },
    sideEffects: {
      title: 'Side Effects',
      list: [
        'Hypotension',
        'Bradycardia',
        'Bronchospasm',
        'Dizziness',
        'Scalp tingling'
      ]
    }
  },
  nitroprusside: {
    title: 'Nitroprusside',
    description: {
      title: 'Description',
      text: 'Direct-acting vasodilator affecting both arteries and veins'
    },
    indications: {
      title: 'Indications',
      list: [
        'Hypertensive emergency',
        'Acute heart failure',
        'Aortic dissection',
        'Controlled hypotension for surgery'
      ]
    },
    dosage: {
      title: 'Dosage',
      preparation: {
        title: 'Preparation',
        text: '50 mg in 250 mL D5W (200 mcg/mL)'
      },
      administration: {
        title: 'Administration',
        list: [
          'Start: 0.3 mcg/kg/min',
          'Titrate by 0.5 mcg/kg/min every 5 minutes',
          'Usual range: 0.5-3 mcg/kg/min',
          'Maximum: 10 mcg/kg/min'
        ]
      }
    },
    contraindications: {
      title: 'Contraindications',
      list: [
        'Severe vitamin B12 deficiency',
        'Tobacco amblyopia',
        'Leber\'s optic atrophy',
        'Compensatory hypertension'
      ]
    },
    sideEffects: {
      title: 'Side Effects',
      list: [
        'Hypotension',
        'Tachycardia',
        'Thiocyanate toxicity',
        'Cyanide toxicity',
        'Methemoglobinemia'
      ]
    }
  },
  dobutamine: {
    title: 'Dobutamine',
    description: {
      title: 'Description',
      text: 'Synthetic catecholamine with predominant beta-1 activity'
    },
    indications: {
      title: 'Indications',
      list: [
        'Cardiogenic shock',
        'Acute decompensated heart failure',
        'Low cardiac output states',
        'Stress echocardiography'
      ]
    },
    dosage: {
      title: 'Dosage',
      preparation: {
        title: 'Preparation',
        text: '250 mg in 250 mL D5W or NS (1000 mcg/mL)'
      },
      administration: {
        title: 'Administration',
        list: [
          'Start: 2.5-5 mcg/kg/min',
          'Titrate by 2.5 mcg/kg/min every 10 minutes',
          'Usual range: 2.5-20 mcg/kg/min',
          'Maximum: 40 mcg/kg/min'
        ]
      }
    },
    contraindications: {
      title: 'Contraindications',
      list: [
        'Idiopathic hypertrophic subaortic stenosis',
        'Severe aortic stenosis',
        'Atrial fibrillation with rapid response'
      ]
    },
    sideEffects: {
      title: 'Side Effects',
      list: [
        'Tachycardia',
        'Arrhythmias',
        'Angina',
        'Hypertension/hypotension',
        'Anxiety'
      ]
    }
  },
  milrinone: {
    title: 'Milrinone',
    description: {
      title: 'Description',
      text: 'Phosphodiesterase III inhibitor with inotropic and vasodilator effects'
    },
    indications: {
      title: 'Indications',
      list: [
        'Acute decompensated heart failure',
        'Right heart failure',
        'Cardiogenic shock',
        'Bridge to definitive therapy'
      ]
    },
    dosage: {
      title: 'Dosage',
      loading: {
        title: 'Loading Dose',
        list: [
          '50 mcg/kg over 10 minutes',
          'May omit if hypotensive'
        ]
      },
      maintenance: {
        title: 'Maintenance',
        list: [
          'Start: 0.375 mcg/kg/min',
          'Range: 0.375-0.75 mcg/kg/min',
          'Reduce dose in renal dysfunction'
        ]
      }
    },
    contraindications: {
      title: 'Contraindications',
      list: [
        'Severe aortic or pulmonic stenosis',
        'Severe hypotension',
        'Acute MI'
      ]
    },
    sideEffects: {
      title: 'Side Effects',
      list: [
        'Hypotension',
        'Arrhythmias',
        'Thrombocytopenia',
        'Headache',
        'Hypokalemia'
      ]
    }
  }
};
