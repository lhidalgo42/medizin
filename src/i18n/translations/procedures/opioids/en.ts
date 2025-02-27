export default {
  tramadol: {
    title: 'Tramadol',
    description: {
      title: 'Description',
      text: 'Synthetic opioid analgesic with dual mechanism of action: μ-opioid receptor agonist and serotonin-norepinephrine reuptake inhibitor (SNRI)'
    },
    indications: {
      title: 'Indications',
      list: [
        'Moderate to severe acute pain',
        'Chronic pain',
        'Neuropathic pain'
      ]
    },
    dosage: {
      title: 'Dosage',
      oral: {
        title: 'Oral',
        list: [
          'Initial: 25-50 mg every 4-6 hours',
          'Maximum: 400 mg/day',
          'Elderly or renal impairment: reduce dose'
        ]
      },
      iv: {
        title: 'Intravenous',
        list: [
          'Initial: 50-100 mg every 4-6 hours',
          'Maximum: 600 mg/day',
          'Infusion rate: over 2-3 minutes'
        ]
      }
    },
    contraindications: {
      title: 'Contraindications',
      list: [
        'Severe respiratory depression',
        'Acute intoxication with alcohol, hypnotics, opioids, or psychotropic drugs',
        'MAO inhibitors (within 14 days)',
        'Severe renal impairment (CrCl < 30 mL/min)',
        'Severe hepatic impairment'
      ]
    },
    sideEffects: {
      title: 'Side Effects',
      common: {
        title: 'Common',
        list: [
          'Nausea/vomiting',
          'Dizziness',
          'Constipation',
          'Headache',
          'Somnolence'
        ]
      },
      serious: {
        title: 'Serious',
        list: [
          'Serotonin syndrome',
          'Seizures',
          'Respiratory depression',
          'Anaphylaxis'
        ]
      }
    }
  },
  fentanyl: {
    title: 'Fentanyl',
    description: {
      title: 'Description',
      text: 'Potent synthetic opioid analgesic (50-100 times more potent than morphine)'
    },
    indications: {
      title: 'Indications',
      list: [
        'Severe acute pain',
        'Breakthrough cancer pain',
        'Anesthetic adjunct',
        'Chronic pain (transdermal)'
      ]
    },
    dosage: {
      title: 'Dosage',
      iv: {
        title: 'Intravenous',
        list: [
          'Initial: 25-50 mcg (titrate to effect)',
          'Maintenance: 25-100 mcg/hour',
          'Bolus: 25-100 mcg every 1-2 hours PRN'
        ]
      },
      transdermal: {
        title: 'Transdermal',
        list: [
          'Initial: 25 mcg/hour patch',
          'Change every 72 hours',
          'Titrate based on response'
        ]
      }
    },
    contraindications: {
      title: 'Contraindications',
      list: [
        'Severe respiratory depression',
        'Acute or severe bronchial asthma',
        'Known hypersensitivity',
        'Paralytic ileus'
      ]
    },
    sideEffects: {
      title: 'Side Effects',
      common: {
        title: 'Common',
        list: [
          'Respiratory depression',
          'Sedation',
          'Nausea/vomiting',
          'Constipation',
          'Muscle rigidity'
        ]
      },
      serious: {
        title: 'Serious',
        list: [
          'Severe respiratory depression',
          'Bradycardia',
          'Chest wall rigidity',
          'Addiction'
        ]
      }
    }
  },
  methadone: {
    title: 'Methadone',
    description: {
      title: 'Description',
      text: 'Synthetic opioid with long half-life and NMDA receptor antagonist properties'
    },
    indications: {
      title: 'Indications',
      list: [
        'Opioid dependence',
        'Chronic pain',
        'Cancer pain'
      ]
    },
    dosage: {
      title: 'Dosage',
      opioidDependence: {
        title: 'Opioid Dependence',
        list: [
          'Initial: 20-30 mg/day',
          'Titrate based on withdrawal symptoms',
          'Maintenance: 60-120 mg/day'
        ]
      },
      pain: {
        title: 'Pain Management',
        list: [
          'Initial: 2.5-10 mg every 8-12 hours',
          'Titrate slowly due to long half-life',
          'Maximum: individualized based on response'
        ]
      }
    },
    contraindications: {
      title: 'Contraindications',
      list: [
        'Severe respiratory depression',
        'Acute bronchial asthma',
        'QT interval prolongation',
        'Paralytic ileus'
      ]
    },
    sideEffects: {
      title: 'Side Effects',
      common: {
        title: 'Common',
        list: [
          'Sedation',
          'Constipation',
          'Nausea',
          'Sweating'
        ]
      },
      serious: {
        title: 'Serious',
        list: [
          'QT prolongation',
          'Torsades de pointes',
          'Respiratory depression',
          'Addiction'
        ]
      }
    }
  },
  morphine: {
    title: 'Morphine',
    description: {
      title: 'Description',
      text: 'Natural opioid analgesic, considered the gold standard for severe pain management'
    },
    indications: {
      title: 'Indications',
      list: [
        'Severe acute pain',
        'Chronic cancer pain',
        'Dyspnea in terminal illness',
        'Acute pulmonary edema'
      ]
    },
    dosage: {
      title: 'Dosage',
      iv: {
        title: 'Intravenous',
        list: [
          'Initial: 2-5 mg every 5-15 minutes (titrate to effect)',
          'Maintenance: 2-10 mg/hour',
          'Elderly: reduce dose by 25-50%'
        ]
      },
      oral: {
        title: 'Oral',
        list: [
          'Immediate release: 10-30 mg every 4 hours',
          'Extended release: 15-30 mg every 8-12 hours',
          'Titrate based on response'
        ]
      }
    },
    contraindications: {
      title: 'Contraindications',
      list: [
        'Severe respiratory depression',
        'Acute or severe bronchial asthma',
        'Paralytic ileus',
        'Known hypersensitivity'
      ]
    },
    sideEffects: {
      title: 'Side Effects',
      common: {
        title: 'Common',
        list: [
          'Respiratory depression',
          'Sedation',
          'Constipation',
          'Nausea/vomiting',
          'Pruritus'
        ]
      },
      serious: {
        title: 'Serious',
        list: [
          'Severe respiratory depression',
          'Hypotension',
          'Addiction',
          'Anaphylaxis'
        ]
      }
    }
  },
  buprenorphine: {
    title: 'Buprenorphine',
    description: {
      title: 'Description',
      text: 'Partial μ-opioid receptor agonist and κ-opioid receptor antagonist'
    },
    indications: {
      title: 'Indications',
      list: [
        'Opioid dependence treatment',
        'Moderate to severe chronic pain',
        'Acute pain'
      ]
    },
    dosage: {
      title: 'Dosage',
      opioidDependence: {
        title: 'Opioid Dependence',
        list: [
          'Induction: 2-4 mg sublingual',
          'Maintenance: 4-24 mg/day',
          'Maximum: 32 mg/day'
        ]
      },
      pain: {
        title: 'Pain Management',
        list: [
          'Transdermal: 5-20 mcg/hour',
          'Change patch every 7 days',
          'Sublingual: 0.2-0.6 mg every 6-8 hours'
        ]
      }
    },
    contraindications: {
      title: 'Contraindications',
      list: [
        'Severe respiratory depression',
        'Severe hepatic impairment',
        'Acute intoxication',
        'Known hypersensitivity'
      ]
    },
    sideEffects: {
      title: 'Side Effects',
      common: {
        title: 'Common',
        list: [
          'Headache',
          'Nausea',
          'Constipation',
          'Application site reactions (transdermal)',
          'Dizziness'
        ]
      },
      serious: {
        title: 'Serious',
        list: [
          'Respiratory depression',
          'Hepatic effects',
          'Allergic reactions',
          'Dependence'
        ]
      }
    }
  }
};
