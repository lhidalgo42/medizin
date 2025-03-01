export default {
  tramadol: {
    title: 'Tramadol',
    description: {
      title: 'Descripción',
      text: 'Analgésico opioide sintético con mecanismo de acción dual: agonista del receptor μ-opioide e inhibidor de la recaptación de serotonina-norepinefrina (IRSN)'
    },
    indications: {
      title: 'Indicaciones',
      list: [
        'Dolor agudo moderado a severo',
        'Dolor crónico',
        'Dolor neuropático'
      ]
    },
    dosage: {
      title: 'Dosificación',
      oral: {
        title: 'Oral',
        list: [
          'Inicial: 25-50 mg cada 4-6 horas',
          'Máximo: 400 mg/día',
          'Ancianos o insuficiencia renal: reducir dosis'
        ]
      },
      iv: {
        title: 'Intravenoso',
        list: [
          'Inicial: 50-100 mg cada 4-6 horas',
          'Máximo: 600 mg/día',
          'Velocidad de infusión: en 2-3 minutos'
        ]
      }
    },
    contraindications: {
      title: 'Contraindicaciones',
      list: [
        'Depresión respiratoria severa',
        'Intoxicación aguda con alcohol, hipnóticos, opioides o drogas psicotrópicas',
        'Inhibidores MAO (en los últimos 14 días)',
        'Insuficiencia renal severa (ClCr < 30 mL/min)',
        'Insuficiencia hepática severa'
      ]
    },
    sideEffects: {
      title: 'Efectos Secundarios',
      common: {
        title: 'Comunes',
        list: [
          'Náuseas/vómitos',
          'Mareo',
          'Estreñimiento',
          'Cefalea',
          'Somnolencia'
        ]
      },
      serious: {
        title: 'Graves',
        list: [
          'Síndrome serotoninérgico',
          'Convulsiones',
          'Depresión respiratoria',
          'Anafilaxia'
        ]
      }
    }
  },
  fentanyl: {
    title: 'Fentanilo',
    description: {
      title: 'Descripción',
      text: 'Analgésico opioide sintético potente (50-100 veces más potente que la morfina)'
    },
    indications: {
      title: 'Indicaciones',
      list: [
        'Dolor agudo severo',
        'Dolor irruptivo en cáncer',
        'Adyuvante anestésico',
        'Dolor crónico (transdérmico)'
      ]
    },
    dosage: {
      title: 'Dosificación',
      iv: {
        title: 'Intravenoso',
        list: [
          'Inicial: 25-50 mcg (titular según efecto)',
          'Mantenimiento: 25-100 mcg/hora',
          'Bolo: 25-100 mcg cada 1-2 horas PRN'
        ]
      },
      transdermal: {
        title: 'Transdérmico',
        list: [
          'Inicial: parche de 25 mcg/hora',
          'Cambiar cada 72 horas',
          'Titular según respuesta'
        ]
      }
    },
    contraindications: {
      title: 'Contraindicaciones',
      list: [
        'Depresión respiratoria severa',
        'Asma bronquial aguda o severa',
        'Hipersensibilidad conocida',
        'Íleo paralítico'
      ]
    },
    sideEffects: {
      title: 'Efectos Secundarios',
      common: {
        title: 'Comunes',
        list: [
          'Depresión respiratoria',
          'Sedación',
          'Náuseas/vómitos',
          'Estreñimiento',
          'Rigidez muscular'
        ]
      },
      serious: {
        title: 'Graves',
        list: [
          'Depresión respiratoria severa',
          'Bradicardia',
          'Rigidez de pared torácica',
          'Adicción'
        ]
      }
    }
  },
  methadone: {
    title: 'Metadona',
    description: {
      title: 'Descripción',
      text: 'Opioide sintético con vida media larga y propiedades antagonistas del receptor NMDA'
    },
    indications: {
      title: 'Indicaciones',
      list: [
        'Dependencia a opioides',
        'Dolor crónico',
        'Dolor oncológico'
      ]
    },
    dosage: {
      title: 'Dosificación',
      opioidDependence: {
        title: 'Dependencia a Opioides',
        list: [
          'Inicial: 20-30 mg/día',
          'Titular según síntomas de abstinencia',
          'Mantenimiento: 60-120 mg/día'
        ]
      },
      pain: {
        title: 'Manejo del Dolor',
        list: [
          'Inicial: 2.5-10 mg cada 8-12 horas',
          'Titular lentamente debido a vida media larga',
          'Máximo: individualizado según respuesta'
        ]
      }
    },
    contraindications: {
      title: 'Contraindicaciones',
      list: [
        'Depresión respiratoria severa',
        'Asma bronquial aguda',
        'Prolongación del intervalo QT',
        'Íleo paralítico'
      ]
    },
    sideEffects: {
      title: 'Efectos Secundarios',
      common: {
        title: 'Comunes',
        list: [
          'Sedación',
          'Estreñimiento',
          'Náuseas',
          'Sudoración'
        ]
      },
      serious: {
        title: 'Graves',
        list: [
          'Prolongación del QT',
          'Torsades de pointes',
          'Depresión respiratoria',
          'Adicción'
        ]
      }
    }
  },
  morphine: {
    title: 'Morfina',
    description: {
      title: 'Descripción',
      text: 'Analgésico opioide natural, considerado el estándar de oro para el manejo del dolor severo'
    },
    indications: {
      title: 'Indicaciones',
      list: [
        'Dolor agudo severo',
        'Dolor crónico oncológico',
        'Disnea en enfermedad terminal',
        'Edema pulmonar agudo'
      ]
    },
    dosage: {
      title: 'Dosificación',
      iv: {
        title: 'Intravenoso',
        list: [
          'Inicial: 2-5 mg cada 5-15 minutos (titular según efecto)',
          'Mantenimiento: 2-10 mg/hora',
          'Ancianos: reducir dosis 25-50%'
        ]
      },
      oral: {
        title: 'Oral',
        list: [
          'Liberación inmediata: 10-30 mg cada 4 horas',
          'Liberación prolongada: 15-30 mg cada 8-12 horas',
          'Titular según respuesta'
        ]
      }
    },
    contraindications: {
      title: 'Contraindicaciones',
      list: [
        'Depresión respiratoria severa',
        'Asma bronquial aguda o severa',
        'Íleo paralítico',
        'Hipersensibilidad conocida'
      ]
    },
    sideEffects: {
      title: 'Efectos Secundarios',
      common: {
        title: 'Comunes',
        list: [
          'Depresión respiratoria',
          'Sedación',
          'Estreñimiento',
          'Náuseas/vómitos',
          'Prurito'
        ]
      },
      serious: {
        title: 'Graves',
        list: [
          'Depresión respiratoria severa',
          'Hipotensión',
          'Adicción',
          'Anafilaxia'
        ]
      }
    }
  },
  buprenorphine: {
    title: 'Buprenorfina',
    description: {
      title: 'Descripción',
      text: 'Agonista parcial del receptor μ-opioide y antagonista del receptor κ-opioide'
    },
    indications: {
      title: 'Indicaciones',
      list: [
        'Tratamiento de dependencia a opioides',
        'Dolor crónico moderado a severo',
        'Dolor agudo'
      ]
    },
    dosage: {
      title: 'Dosificación',
      opioidDependence: {
        title: 'Dependencia a Opioides',
        list: [
          'Inducción: 2-4 mg sublingual',
          'Mantenimiento: 4-24 mg/día',
          'Máximo: 32 mg/día'
        ]
      },
      pain: {
        title: 'Manejo del Dolor',
        list: [
          'Transdérmico: 5-20 mcg/hora',
          'Cambiar parche cada 7 días',
          'Sublingual: 0.2-0.6 mg cada 6-8 horas'
        ]
      }
    },
    contraindications: {
      title: 'Contraindicaciones',
      list: [
        'Depresión respiratoria severa',
        'Insuficiencia hepática severa',
        'Intoxicación aguda',
        'Hipersensibilidad conocida'
      ]
    },
    sideEffects: {
      title: 'Efectos Secundarios',
      common: {
        title: 'Comunes',
        list: [
          'Cefalea',
          'Náuseas',
          'Estreñimiento',
          'Reacciones en sitio de aplicación (transdérmico)',
          'Mareo'
        ]
      },
      serious: {
        title: 'Graves',
        list: [
          'Depresión respiratoria',
          'Efectos hepáticos',
          'Reacciones alérgicas',
          'Dependencia'
        ]
      }
    }
  }
};