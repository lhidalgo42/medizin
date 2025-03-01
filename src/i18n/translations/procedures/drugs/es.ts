export default {
  adenosine: {
    title: 'Adenosina',
    description: {
      title: 'Descripción',
      text: 'Nucleósido endógeno que ralentiza la conducción del nodo AV'
    },
    indications: {
      title: 'Indicaciones',
      list: [
        'TPSV (incluyendo TRNAV y TRAV)',
        'Herramienta diagnóstica para taquicardias de complejo ancho'
      ]
    },
    dosage: {
      title: 'Dosificación',
      initial: {
        title: 'Dosis Inicial',
        list: [
          '6 mg en bolo IV rápido',
          'Seguir inmediatamente con lavado rápido de solución salina'
        ]
      },
      subsequent: {
        title: 'Dosis Subsecuentes',
        list: [
          '12 mg si es necesario después de 1-2 minutos',
          'Puede repetirse 12 mg una vez más'
        ]
      }
    },
    administration: {
      title: 'Administración',
      list: [
        'Usar vena grande proximal o línea central',
        'Elevar extremidad durante la administración',
        'Advertir al paciente sobre efectos secundarios transitorios'
      ]
    },
    contraindications: {
      title: 'Contraindicaciones',
      list: [
        'Bloqueo cardíaco de segundo o tercer grado',
        'Síndrome del seno enfermo',
        'Asma severa o EPOC',
        'Fibrilación auricular pre-excitada'
      ]
    },
    sideEffects: {
      title: 'Efectos Secundarios',
      list: [
        'Dolor torácico',
        'Disnea',
        'Rubor',
        'Asistolia breve',
        'Broncoespasmo'
      ]
    }
  },
  amiodarone: {
    title: 'Amiodarona',
    description: {
      title: 'Descripción',
      text: 'Antiarrítmico clase III con efectos en múltiples canales'
    },
    indications: {
      title: 'Indicaciones',
      list: [
        'FV/TV sin pulso',
        'TV estable',
        'Fibrilación auricular',
        'Flutter auricular'
      ]
    },
    dosage: {
      title: 'Dosificación',
      cardiac: {
        title: 'Paro Cardíaco',
        list: [
          'Inicial: 300 mg en bolo IV',
          'Segunda dosis: 150 mg en bolo IV'
        ]
      },
      stable: {
        title: 'Paciente Estable',
        list: [
          'Carga: 150 mg en 10 minutos',
          'Seguir con: 1 mg/min por 6 horas',
          'Luego: 0.5 mg/min por 18 horas'
        ]
      }
    },
    contraindications: {
      title: 'Contraindicaciones',
      list: [
        'Shock cardiogénico',
        'Disfunción severa del nodo sinusal',
        'Bloqueo cardíaco de segundo o tercer grado',
        'Enfermedad hepática severa'
      ]
    },
    sideEffects: {
      title: 'Efectos Secundarios',
      acute: {
        title: 'Agudos',
        list: [
          'Hipotensión',
          'Bradicardia',
          'Bloqueo cardíaco',
          'Flebitis'
        ]
      },
      chronic: {
        title: 'Crónicos',
        list: [
          'Toxicidad pulmonar',
          'Disfunción tiroidea',
          'Hepatotoxicidad',
          'Depósitos corneales'
        ]
      }
    }
  },
  lanatoside: {
    title: 'Lanatósido C',
    description: {
      title: 'Descripción',
      text: 'Glucósido cardíaco con efectos inotrópicos positivos'
    },
    indications: {
      title: 'Indicaciones',
      list: [
        'Fibrilación auricular con respuesta ventricular rápida',
        'Flutter auricular',
        'Insuficiencia cardíaca'
      ]
    },
    dosage: {
      title: 'Dosificación',
      loading: {
        title: 'Dosis de Carga',
        list: [
          'Inicial: 0.4-0.8 mg IV',
          'Puede repetirse 0.2 mg cada 2-4 horas',
          'Máximo total: 1.6 mg en 24 horas'
        ]
      },
      maintenance: {
        title: 'Mantenimiento',
        list: [
          '0.1-0.2 mg diarios',
          'Ajustar según respuesta y función renal'
        ]
      }
    },
    contraindications: {
      title: 'Contraindicaciones',
      list: [
        'Taquicardia ventricular',
        'Bloqueo cardíaco completo',
        'Miocardiopatía hipertrófica',
        'Toxicidad digitálica'
      ]
    },
    sideEffects: {
      title: 'Efectos Secundarios',
      list: [
        'Náuseas/vómitos',
        'Arritmias cardíacas',
        'Alteraciones visuales',
        'Confusión',
        'Hiperpotasemia'
      ]
    }
  },
  nitroglycerin: {
    title: 'Nitroglicerina',
    description: {
      title: 'Descripción',
      text: 'Nitrato que causa vasodilatación y reduce precarga/poscarga'
    },
    indications: {
      title: 'Indicaciones',
      list: [
        'Síndrome coronario agudo',
        'Edema pulmonar agudo',
        'Emergencia hipertensiva',
        'Angina de pecho'
      ]
    },
    dosage: {
      title: 'Dosificación',
      sublingual: {
        title: 'Sublingual',
        list: [
          'Tableta de 0.4 mg',
          'Puede repetirse cada 5 minutos',
          'Máximo: 3 dosis'
        ]
      },
      iv: {
        title: 'Infusión IV',
        list: [
          'Inicio: 5-10 mcg/min',
          'Titular 5-10 mcg/min cada 5-10 minutos',
          'Rango usual: 10-200 mcg/min'
        ]
      }
    },
    contraindications: {
      title: 'Contraindicaciones',
      list: [
        'Hipotensión (PAS < 90 mmHg)',
        'Infarto ventricular derecho',
        'Uso de inhibidores de fosfodiesterasa',
        'Estenosis aórtica severa'
      ]
    },
    sideEffects: {
      title: 'Efectos Secundarios',
      list: [
        'Cefalea',
        'Hipotensión',
        'Taquicardia',
        'Rubor',
        'Metahemoglobinemia (raro)'
      ]
    }
  },
  noradrenaline: {
    title: 'Noradrenalina',
    description: {
      title: 'Descripción',
      text: 'Potente agonista alfa-adrenérgico con alguna actividad beta-1'
    },
    indications: {
      title: 'Indicaciones',
      list: [
        'Shock séptico',
        'Shock cardiogénico',
        'Shock vasodilatador',
        'Post-paro cardíaco'
      ]
    },
    dosage: {
      title: 'Dosificación',
      preparation: {
        title: 'Preparación',
        text: '4 mg en 250 mL D5W o NS (16 mcg/mL)'
      },
      administration: {
        title: 'Administración',
        list: [
          'Inicio: 0.01-0.03 mcg/kg/min',
          'Titular hasta objetivo de PAM',
          'Rango usual: 0.01-0.5 mcg/kg/min',
          'Máximo: 1 mcg/kg/min'
        ]
      }
    },
    contraindications: {
      title: 'Contraindicaciones',
      list: [
        'Hipovolemia (debe corregirse primero)',
        'Trombosis vascular mesentérica/periférica'
      ]
    },
    sideEffects: {
      title: 'Efectos Secundarios',
      list: [
        'Arritmias',
        'Isquemia tisular',
        'Hipertensión',
        'Ansiedad/temblor',
        'Lesión por extravasación'
      ]
    }
  },
  labetalol: {
    title: 'Labetalol',
    description: {
      title: 'Descripción',
      text: 'Bloqueador alfa y beta combinado (relación 1:3 IV, 1:7 oral)'
    },
    indications: {
      title: 'Indicaciones',
      list: [
        'Emergencia hipertensiva',
        'Urgencia hipertensiva',
        'Disección aórtica',
        'Preeclampsia/eclampsia'
      ]
    },
    dosage: {
      title: 'Dosificación',
      iv: {
        title: 'Bolo IV',
        list: [
          'Inicial: 10-20 mg en 2 minutos',
          'Repetir: 20-80 mg cada 10 minutos',
          'Dosis única máxima: 80 mg',
          'Máximo total: 300 mg'
        ]
      },
      infusion: {
        title: 'Infusión IV',
        list: [
          'Inicial: 0.5-2 mg/min',
          'Titular según respuesta',
          'Máximo: 300 mg/24 horas'
        ]
      }
    },
    contraindications: {
      title: 'Contraindicaciones',
      list: [
        'Bradicardia severa',
        'Bloqueo cardíaco mayor a primer grado',
        'Shock cardiogénico',
        'Enfermedad broncoespástica severa'
      ]
    },
    sideEffects: {
      title: 'Efectos Secundarios',
      list: [
        'Hipotensión',
        'Bradicardia',
        'Broncoespasmo',
        'Mareo',
        'Hormigueo en cuero cabelludo'
      ]
    }
  },
  nitroprusside: {
    title: 'Nitroprusiato',
    description: {
      title: 'Descripción',
      text: 'Vasodilatador de acción directa que afecta tanto arterias como venas'
    },
    indications: {
      title: 'Indicaciones',
      list: [
        'Emergencia hipertensiva',
        'Insuficiencia cardíaca aguda',
        'Disección aórtica',
        'Hipotensión controlada para cirugía'
      ]
    },
    dosage: {
      title: 'Dosificación',
      preparation: {
        title: 'Preparación',
        text: '50 mg en 250 mL D5W (200 mcg/mL)'
      },
      administration: {
        title: 'Administración',
        list: [
          'Inicio: 0.3 mcg/kg/min',
          'Titular 0.5 mcg/kg/min cada 5 minutos',
          'Rango usual: 0.5-3 mcg/kg/min',
          'Máximo: 10 mcg/kg/min'
        ]
      }
    },
    contraindications: {
      title: 'Contraindicaciones',
      list: [
        'Deficiencia severa de vitamina B12',
        'Ambliopía por tabaco',
        'Atrofia óptica de Leber',
        'Hipertensión compensatoria'
      ]
    },
    sideEffects: {
      title: 'Efectos Secundarios',
      list: [
        'Hipotensión',
        'Taquicardia',
        'Toxicidad por tiocianato',
        'Toxicidad por cianuro',
        'Metahemoglobinemia'
      ]
    }
  },
  dobutamine: {
    title: 'Dobutamina',
    description: {
      title: 'Descripción',
      text: 'Catecolamina sintética con actividad predominante beta-1'
    },
    indications: {
      title: 'Indicaciones',
      list: [
        'Shock cardiogénico',
        'Insuficiencia cardíaca aguda descompensada',
        'Estados de bajo gasto cardíaco',
        'Ecocardiografía de estrés'
      ]
    },
    dosage: {
      title: 'Dosificación',
      preparation: {
        title: 'Preparación',
        text: '250 mg en 250 mL D5W o NS (1000 mcg/mL)'
      },
      administration: {
        title: 'Administración',
        list: [
          'Inicio: 2.5-5 mcg/kg/min',
          'Titular 2.5 mcg/kg/min cada 10 minutos',
          'Rango usual: 2.5-20 mcg/kg/min',
          'Máximo: 40 mcg/kg/min'
        ]
      }
    },
    contraindications: {
      title: 'Contraindicaciones',
      list: [
        'Estenosis subaórtica hipertrófica idiopática',
        'Estenosis aórtica severa',
        'Fibrilación auricular con respuesta rápida'
      ]
    },
    sideEffects: {
      title: 'Efectos Secundarios',
      list: [
        'Taquicardia',
        'Arritmias',
        'Angina',
        'Hipertensión/hipotensión',
        'Ansiedad'
      ]
    }
  },
  milrinone: {
    title: 'Milrinona',
    description: {
      title: 'Descripción',
      text: 'Inhibidor de fosfodiesterasa III con efectos inotrópicos y vasodilatadores'
    },
    indications: {
      title: 'Indicaciones',
      list: [
        'Insuficiencia cardíaca aguda descompensada',
        'Insuficiencia cardíaca derecha',
        'Shock cardiogénico',
        'Puente a terapia definitiva'
      ]
    },
    dosage: {
      title: 'Dosificación',
      loading: {
        title: 'Dosis de Carga',
        list: [
          '50 mcg/kg en 10 minutos',
          'Puede omitirse si hay hipotensión'
        ]
      },
      maintenance: {
        title: 'Mantenimiento',
        list: [
          'Inicio: 0.375 mcg/kg/min',
          'Rango: 0.375-0.75 mcg/kg/min',
          'Reducir dosis en disfunción renal'
        ]
      }
    },
    contraindications: {
      title: 'Contraindicaciones',
      list: [
        'Estenosis aórtica o pulmonar severa',
        'Hipotensión severa',
        'IAM agudo'
      ]
    },
    sideEffects: {
      title: 'Efectos Secundarios',
      list: [
        'Hipotensión',
        'Arritmias',
        'Trombocitopenia',
        'Cefalea',
        'Hipopotasemia'
      ]
    }
  }
};