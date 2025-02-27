export default {
  cirrhosis: {
    title: 'Cirrhosis Assessment (Child-Pugh, MELD, MELD Na)',
    childPugh: {
      title: 'Child-Pugh Score',
      parameters: [
        'Encephalopathy',
        'Ascites',
        'Bilirubin',
        'Albumin',
        'INR'
      ],
      classes: {
        a: 'Class A: 5-6 points',
        b: 'Class B: 7-9 points',
        c: 'Class C: 10-15 points'
      }
    },
    meld: {
      title: 'MELD Score',
      formula: 'MELD = 3.78×ln[serum bilirubin (mg/dL)] + 11.2×ln[INR] + 9.57×ln[serum creatinine (mg/dL)] + 6.43',
      notes: [
        'If any value is less than 1.0, use 1.0',
        'Maximum serum creatinine value for the formula is 4.0',
        'For patients who had dialysis twice within the last week, use creatinine value of 4.0'
      ]
    },
    meldNa: {
      title: 'MELD-Na Score',
      formula: 'MELD-Na = MELD - Na - [0.025 × MELD × (140-Na)] + 140',
      notes: [
        'For Na values < 125 mmol/L, use 125',
        'For Na values > 140 mmol/L, use 140'
      ]
    }
  },
  hco3Deficit: {
    title: 'HCO3 Deficit',
    formula: 'HCO3 deficit = 0.6 × weight × (desired HCO3 - current HCO3)',
    notes: [
      'Weight in kg',
      'HCO3 in mEq/L',
      'Desired HCO3 usually 15 mEq/L (for pH > 7.2)'
    ]
  },
  h2oDeficit: {
    title: 'H2O Deficit',
    formula: 'H2O deficit = weight × %dehydration',
    notes: [
      'Weight in kg',
      'Result in mL',
      'Mild dehydration: 5%',
      'Moderate dehydration: 7-10%',
      'Severe dehydration: >10%'
    ]
  },
  qtInterval: {
    title: 'Corrected QT Interval',
    bazett: {
      title: 'Bazett Formula',
      formula: 'QTc = QT/√RR',
      notes: [
        'QT in seconds',
        'RR in seconds',
        'Normal values:',
        '- Men: < 450 ms',
        '- Women: < 470 ms'
      ]
    },
    fridericia: {
      title: 'Fridericia Formula',
      formula: 'QTc = QT/∛RR',
      notes: [
        'More accurate at extreme heart rates',
        'Same normal values as Bazett'
      ]
    }
  },
  correctedCalcium: {
    title: 'Corrected Calcium',
    formula: 'Corrected Ca = Total Ca + 0.8 × (4 - albumin)',
    notes: [
      'Calcium in mg/dL',
      'Albumin in g/dL',
      'Normal range: 8.5-10.5 mg/dL'
    ]
  },
  renalFunction: {
    title: 'Renal Function',
    ckdEpi: {
      title: 'CKD-EPI Formula',
      formula: 'GFR = 141 × min(Scr/κ,1)α × max(Scr/κ,1)-1.209 × 0.993Age × 1.018[if female] × 1.159[if black]',
      notes: [
        'κ = 0.7 (females) or 0.9 (males)',
        'α = -0.329 (females) or -0.411 (males)',
        'Scr = serum creatinine in mg/dL'
      ]
    },
    cockcroft: {
      title: 'Cockcroft-Gault Formula',
      formula: 'CrCl = [(140-age) × weight × (0.85 if female)] / (72 × Scr)',
      notes: [
        'Age in years',
        'Weight in kg',
        'Scr = serum creatinine in mg/dL'
      ]
    }
  },
  plasmaOsmolarity: {
    title: 'Plasma Osmolarity',
    formula: 'Osm = (2 × Na) + (glucose/18) + (BUN/2.8)',
    notes: [
      'Na in mEq/L',
      'Glucose in mg/dL',
      'BUN in mg/dL',
      'Normal range: 285-295 mOsm/L'
    ]
  },
  cvcPosition: {
    title: 'CVC Positioning',
    formula: 'Depth (cm) = height/10 - 2',
    notes: [
      'Height in cm',
      'For right internal jugular or right subclavian approach',
      'Add 2 cm for left-sided approaches'
    ]
  }
};
