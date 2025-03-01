export default {
  title: 'Crisis Hipertensiva',
  subTitle: '(>180/110)',
  checkOrganDamage: {
    title: '¿Existe daño a órganos?',
    steps: [
      'Verificar: Déficit focal',
      'Verificar: Estado alterado de conciencia',
      'Verificar: Cefalea severa',
      'Verificar: Disnea',
      'Verificar: Dolor torácico'
    ]
  },
  withOrganDamage: {
    title: 'Solicitar traslado a UCI/UCO',
    steps: [
      'Ordenar: TC cerebral sin contraste',
      'Ordenar: ECG',
      'Ordenar: Radiografía de tórax',
      'Ordenar: Angiografía torácica (ATC)'
    ],
    acutePulmonaryEdema: {
      title: 'Si hay Edema Pulmonar Agudo\n Iniciar tratamiento antes del traslado',
      medications: {
        ntg: 'Nitroglicerina',
        furosemide: 'Furosemida'
      }
    },
    renalFailure: {
      title: 'Insuficiencia\n Renal Avanzada',
      yes: 'Dosis IV altas\n (40-80 mg)',
      no: 'Dosis IV bajas\n (10-20 mg)',
      conclution: 'Disminución de PA en 10-20% en\n la primera hora, luego 5-15% en\n las siguientes 23 horas'
    },
  },
  withoutOrganDamage: {
    title: 'Sin Daño a Órganos',
    asymptomatic: 'Asintomático',
    previousHTA: {
      title: 'Antihipertensivo\n previo',
      yes: 'Reiniciar\n medicamentos\n antihipertensivos\n previos',
      no: {
        study: {
          title: 'Estudio básico\n de causas secundarias',
          steps: [
            'Verificar: Creatinina',
            'Verificar: BUN',
            'Verificar: Cefalea severa',
            'Verificar: Uroanálisis completo'
          ]
        },
        antiHTA: {
          title: 'Iniciar Antihipertensivo\n de Acción Corta',
          conclution: 'Disminución de PA\n en días'
        }
      }
    },
    mildHeadache: {
      title: 'Cefalea leve y/o\n PA >220/120',
      steps: [
        'Reducir estímulos externos',
        'Apagar las luces',
        'Mantener ambiente silencioso'
      ]
    },
    reduceStimuli: {
      title: 'Reducir estímulos externos',
      steps: [
        'Apagar las luces',
        'Mantener un ambiente tranquilo'
      ]
    },
    ifPain: {
      title: 'Si hay dolor\n analgésico'
    },
    ifAnxiety: {
      title: 'Si hay ansiedad\n Iniciar\n Benzodiacepina'
    },
    startAntiHTA: {
      title: 'Iniciar\n Antihipertensivo\n de Vida Media Corta',
      steps: [
        'Captopril'
      ]
    },
    titrateAntiHTA: {
      title: 'Titular después\n Antihipertensivo\n de vida media larga',
      conclution: "Reducción en PA\n en 24-72 horas"
    }
  }
};