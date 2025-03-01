export default {
  title: 'Hypertensive Crisis',
  subTitle: '(>180/110)',
  checkOrganDamage: {
    title: 'Is there a organ damage?',
    steps: [
      'Check: Focal Deficit',
      'Check: Altered state of consciousness',
      'Check: Severe headache',
      'Check: Dyspnoea',
      'Check: Chest Pain'
    ]
  },
  withOrganDamage: {
    title: 'Request ICU/CCU Transfer',
    steps: [
      'Order: Brain CT without contrast',
      'Order: ECG',
      'Order: Chest X-ray',
      'Order: Chest Angiography (CTA)'
    ],
    acutePulmonaryEdema: {
      title: 'If Acute Pulmonary Edema\n Start treatment before transfer',
      medications: {
        ntg: 'Nitroglycerin',
        furosemide: 'Furosemide'
      }
    },
    renalFailure: {
      title: 'Advanced\n Renal Failure',
      yes: 'High IV doses\n (40-80 mg)',
      no: 'Low IV doses\n (10-20 mg)',
      conclution: 'HBP decrease by 10-20% in\n the first hour, then 5-15% in\n the next 23 hours'
    },
  },
  withoutOrganDamage: {
    title: 'Without Organ Damage',
    asymptomatic: 'Asymptomatic',
    previousHTA: {
      title: 'Previous\n anti-hypertensive',
      yes: 'Restart\n previous\n anti-hypertensive\n medications',
      no: {
        study: {
          title: 'Basic study\n of secondary causes',
          steps: [
            'Check: Creatine',
            'Check: BUN',
            'Check: Severe headache',
            'Check: Complete Urinalysis'
          ]
        },
        antiHTA: {
          title: 'Start Short-Acting\n Anti-Hypertensive',
          conclution: 'HBP decrease\n in days'
        }
      }
    },
    mildHeadache: {
      title: 'Mild Headache and/or\n BP >220/120',
      steps: [
        'Reduce external stimuli',
        'Turn off lights',
        'Maintain silent environment'
      ]
    },
    reduceStimuli: {
      title: 'Reduce external stimuli',
      steps: [
        'Turn off the lights',
        'Maintain a quiet environment'
      ]
    },
    ifPain: {
      title: 'If Pain\n analgesic'
    },
    ifAnxiety: {
      title: 'If Anxiety\n Start\n Benzodiazepine'
    },
    startAntiHTA: {
      title: 'Start\n Anti-Hypertensive\n Short Half-Life',
      steps: [
        'Captopril'
      ]
    },
    titrateAntiHTA: {
      title: 'Titrate after\n Antihypertensive\n long half-life',
      conclution: "Reduction in HBP\n in 24-72 hours"
    }

  }

};

