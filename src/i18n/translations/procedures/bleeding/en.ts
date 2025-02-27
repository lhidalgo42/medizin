export default {
  reverseTaco: {
    title: 'Reverse TACO',
    description: {
      title: 'Description',
      text: 'Transfusion-Associated Circulatory Overload (TACO) reversal protocol'
    },
    management: {
      title: 'Management',
      immediate: {
        title: 'Immediate Actions',
        list: [
          'Stop transfusion immediately',
          'Position patient upright',
          'Administer oxygen',
          'Monitor vital signs'
        ]
      },
      treatment: {
        title: 'Treatment',
        list: [
          'Furosemide 20-40mg IV',
          'Consider additional diuretics if needed',
          'Nitrates for severe cases',
          'Monitor fluid balance'
        ]
      }
    },
    monitoring: {
      title: 'Monitoring',
      list: [
        'Respiratory rate',
        'Oxygen saturation',
        'Blood pressure',
        'Heart rate',
        'Urine output'
      ]
    }
  },
  reverseDabigatran: {
    title: 'Reverse Dabigatran',
    description: {
      title: 'Description',
      text: 'Protocol for reversing anticoagulation effects of Dabigatran'
    },
    indications: {
      title: 'Indications',
      list: [
        'Life-threatening bleeding',
        'Emergency surgery',
        'Intracranial hemorrhage'
      ]
    },
    treatment: {
      title: 'Treatment',
      idarucizumab: {
        title: 'Idarucizumab (Praxbind)',
        list: [
          'Dose: 5g IV (2 doses of 2.5g)',
          'Administer as two consecutive infusions',
          'No dose adjustment for renal function'
        ]
      },
      supportive: {
        title: 'Supportive Measures',
        list: [
          'Volume resuscitation',
          'RBC transfusion if needed',
          'Local hemostatic measures',
          'Consider activated charcoal if recent ingestion'
        ]
      }
    }
  },
  reverseHeparin: {
    title: 'Reverse Heparin',
    description: {
      title: 'Description',
      text: 'Protocol for reversing anticoagulation effects of unfractionated heparin'
    },
    treatment: {
      title: 'Treatment',
      protamine: {
        title: 'Protamine Sulfate',
        dosing: [
          '1mg protamine per 100 units UFH if < 30 min',
          '0.5mg protamine per 100 units UFH if 30-60 min',
          '0.25mg protamine per 100 units UFH if 60-120 min'
        ],
        administration: [
          'Maximum single dose: 50mg',
          'Maximum rate: 5mg/min',
          'Monitor aPTT after administration'
        ]
      }
    },
    monitoring: {
      title: 'Monitoring',
      list: [
        'Vital signs',
        'aPTT',
        'Bleeding sites',
        'Signs of allergic reaction'
      ]
    }
  },
  transfusePlatelets: {
    title: 'Transfuse Platelets',
    indications: {
      title: 'Indications',
      therapeutic: {
        title: 'Therapeutic',
        list: [
          'Active bleeding with thrombocytopenia',
          'Severe bleeding regardless of count',
          'DIC with bleeding'
        ]
      },
      prophylactic: {
        title: 'Prophylactic',
        list: [
          'Count < 10,000 (stable patient)',
          'Count < 20,000 (with risk factors)',
          'Count < 50,000 (before invasive procedure)'
        ]
      }
    },
    administration: {
      title: 'Administration',
      dosing: {
        title: 'Dosing',
        list: [
          'Adult dose: 1 unit per 10kg body weight',
          'Typical adult dose: 4-6 units',
          'Infuse over 15-30 minutes'
        ]
      },
      monitoring: {
        title: 'Monitoring',
        list: [
          'Platelet count increment',
          'Bleeding symptoms',
          'Transfusion reactions'
        ]
      }
    }
  },
  fibrinogenDeficit: {
    title: 'Fibrinogen Deficit',
    assessment: {
      title: 'Assessment',
      list: [
        'Check fibrinogen level',
        'Normal range: 200-400 mg/dL',
        'Critical level < 100 mg/dL'
      ]
    },
    treatment: {
      title: 'Treatment',
      cryoprecipitate: {
        title: 'Cryoprecipitate',
        list: [
          'Initial dose: 10 units',
          'Each unit contains ~250mg fibrinogen',
          'Expected rise: 60-100 mg/dL'
        ]
      },
      concentrate: {
        title: 'Fibrinogen Concentrate',
        list: [
          'Dose: 30-60 mg/kg',
          'Reconstitute according to manufacturer',
          'Administer slowly IV'
        ]
      }
    },
    monitoring: {
      title: 'Monitoring',
      list: [
        'Repeat fibrinogen level',
        'Coagulation parameters',
        'Clinical bleeding'
      ]
    }
  },
  hemophilia: {
    title: 'Hemophilia',
    assessment: {
      title: 'Assessment',
      list: [
        'Determine hemophilia type (A or B)',
        'Assess factor level',
        'Evaluate bleeding severity'
      ]
    },
    treatment: {
      title: 'Treatment',
      hemophiliaA: {
        title: 'Hemophilia A',
        list: [
          'Factor VIII concentrate',
          'Dose based on desired level rise',
          'Minor bleeding: 20-40% level',
          'Major bleeding: 80-100% level'
        ]
      },
      hemophiliaB: {
        title: 'Hemophilia B',
        list: [
          'Factor IX concentrate',
          'Dose based on desired level rise',
          'Minor bleeding: 20-40% level',
          'Major bleeding: 60-100% level'
        ]
      }
    },
    monitoring: {
      title: 'Monitoring',
      list: [
        'Factor levels',
        'Clinical response',
        'Inhibitor development',
        'Complications'
      ]
    }
  }
};
