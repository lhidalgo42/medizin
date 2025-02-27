export default {
  hemocomponents: {
    title: 'Blood Components',
    redCells: {
      title: 'Red Blood Cells',
      indications: {
        title: 'Indications',
        list: [
          'Acute blood loss with hemodynamic instability',
          'Symptomatic anemia',
          'Hb < 7 g/dL in stable patients',
          'Hb < 8 g/dL in perioperative period',
          'Hb < 8 g/dL in cardiovascular disease'
        ]
      },
      administration: {
        title: 'Administration',
        list: [
          'Check patient identification',
          'Verify blood type compatibility',
          'Use standard blood filter',
          'Infuse over 2-4 hours',
          'Maximum 4 hours per unit'
        ]
      },
      monitoring: {
        title: 'Monitoring',
        list: [
          'Vital signs before, 15 min after start, and hourly',
          'Watch for transfusion reactions',
          'Document volume and time',
          'Check post-transfusion Hb'
        ]
      }
    },
    platelets: {
      title: 'Platelets',
      indications: {
        title: 'Indications',
        list: [
          'Active bleeding with thrombocytopenia',
          'Prophylaxis in severe thrombocytopenia',
          'Before invasive procedures',
          'Platelet dysfunction'
        ]
      },
      dosing: {
        title: 'Dosing',
        list: [
          'One unit per 10 kg body weight',
          'Typical adult dose: 4-6 units',
          'Expected rise: 30-50,000/μL per unit'
        ]
      },
      administration: {
        title: 'Administration',
        list: [
          'Room temperature',
          'Rapid infusion (15-30 minutes)',
          'No special filter required',
          'Do not refrigerate'
        ]
      }
    },
    plasma: {
      title: 'Fresh Frozen Plasma',
      indications: {
        title: 'Indications',
        list: [
          'Multiple coagulation factor deficiency',
          'Massive transfusion',
          'Warfarin reversal with bleeding',
          'DIC with bleeding'
        ]
      },
      dosing: {
        title: 'Dosing',
        list: [
          'Initial: 10-15 mL/kg',
          'Repeat based on coagulation tests',
          'Consider patient volume status'
        ]
      },
      administration: {
        title: 'Administration',
        list: [
          'Must be ABO compatible',
          'Thaw before use',
          'Use within 24 hours of thawing',
          'Infuse over 30 minutes per unit'
        ]
      }
    },
    cryoprecipitate: {
      title: 'Cryoprecipitate',
      indications: {
        title: 'Indications',
        list: [
          'Fibrinogen < 100 mg/dL',
          'von Willebrand disease',
          'Hemophilia A',
          'Factor XIII deficiency'
        ]
      },
      dosing: {
        title: 'Dosing',
        list: [
          'Adult dose: 10 units',
          'Pediatric: 1 unit per 5-10 kg',
          'Contains ~250 mg fibrinogen per unit'
        ]
      },
      administration: {
        title: 'Administration',
        list: [
          'Pool units before administration',
          'Use within 6 hours of thawing',
          'Infuse rapidly',
          'Standard blood filter'
        ]
      }
    }
  },
  reactions: {
    title: 'Transfusion Reactions',
    acute: {
      title: 'Acute Reactions',
      allergic: {
        title: 'Allergic',
        symptoms: [
          'Urticaria',
          'Pruritus',
          'Flushing',
          'Angioedema'
        ],
        management: [
          'Stop transfusion',
          'Antihistamines',
          'May resume if mild and symptoms resolve',
          'Document reaction'
        ]
      },
      febrile: {
        title: 'Febrile Non-Hemolytic',
        symptoms: [
          'Temperature increase ≥ 1°C',
          'Chills',
          'Rigors',
          'No other cause identified'
        ],
        management: [
          'Stop transfusion',
          'Antipyretics',
          'Rule out hemolytic reaction',
          'Use leukoreduced products in future'
        ]
      },
      hemolytic: {
        title: 'Acute Hemolytic',
        symptoms: [
          'Fever',
          'Chills',
          'Back pain',
          'Hypotension',
          'Dark urine',
          'Bleeding'
        ],
        management: [
          'Stop transfusion immediately',
          'Maintain IV access',
          'Send blood samples',
          'Support blood pressure',
          'Monitor urine output',
          'Consider DIC treatment'
        ]
      },
      taco: {
        title: 'TACO (Circulatory Overload)',
        symptoms: [
          'Dyspnea',
          'Orthopnea',
          'Hypertension',
          'Pulmonary edema'
        ],
        management: [
          'Stop transfusion',
          'Upright position',
          'Diuretics',
          'Oxygen therapy',
          'Monitor vital signs'
        ]
      },
      trali: {
        title: 'TRALI',
        symptoms: [
          'Acute respiratory distress',
          'Hypoxemia',
          'Bilateral infiltrates',
          'No evidence of overload'
        ],
        management: [
          'Stop transfusion',
          'Supportive care',
          'Oxygen therapy',
          'May need ventilation',
          'Report to blood bank'
        ]
      }
    },
    delayed: {
      title: 'Delayed Reactions',
      hemolytic: {
        title: 'Delayed Hemolytic',
        symptoms: [
          'Fever',
          'Jaundice',
          'Decreasing hemoglobin',
          'Occurs 3-10 days post-transfusion'
        ],
        management: [
          'Monitor hemoglobin',
          'Support as needed',
          'Avoid implicated donor',
          'Update antibody history'
        ]
      },
      gvhd: {
        title: 'Transfusion-Associated GVHD',
        symptoms: [
          'Fever',
          'Rash',
          'Diarrhea',
          'Liver dysfunction',
          'Pancytopenia'
        ],
        management: [
          'Supportive care',
          'Usually fatal',
          'Prevention with irradiated products',
          'Report to blood bank'
        ]
      }
    },
    prevention: {
      title: 'Prevention Strategies',
      list: [
        'Proper patient identification',
        'Check blood product compatibility',
        'Monitor vital signs',
        'Slow initial infusion rate',
        'Recognize early signs',
        'Have emergency medications ready',
        'Document all reactions'
      ]
    }
  }
};
