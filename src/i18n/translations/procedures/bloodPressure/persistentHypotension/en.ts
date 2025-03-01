export default {
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
};