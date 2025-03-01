export default {
  reverseTaco: {
    title: 'Revertir TACO',
    description: {
      title: 'Descripción',
      text: 'Protocolo de reversión de Sobrecarga Circulatoria Asociada a Transfusión (TACO)'
    },
    management: {
      title: 'Manejo',
      immediate: {
        title: 'Acciones Inmediatas',
        list: [
          'Detener transfusión inmediatamente',
          'Posicionar al paciente en posición vertical',
          'Administrar oxígeno',
          'Monitorizar signos vitales'
        ]
      },
      treatment: {
        title: 'Tratamiento',
        list: [
          'Furosemida 20-40mg IV',
          'Considerar diuréticos adicionales si es necesario',
          'Nitratos para casos graves',
          'Monitorizar balance de líquidos'
        ]
      }
    },
    monitoring: {
      title: 'Monitorización',
      list: [
        'Frecuencia respiratoria',
        'Saturación de oxígeno',
        'Presión arterial',
        'Frecuencia cardíaca',
        'Producción de orina'
      ]
    }
  },
  reverseDabigatran: {
    title: 'Revertir Dabigatrán',
    description: {
      title: 'Descripción',
      text: 'Protocolo para revertir efectos anticoagulantes del Dabigatrán'
    },
    indications: {
      title: 'Indicaciones',
      list: [
        'Sangrado potencialmente mortal',
        'Cirugía de emergencia',
        'Hemorragia intracraneal'
      ]
    },
    treatment: {
      title: 'Tratamiento',
      idarucizumab: {
        title: 'Idarucizumab (Praxbind)',
        list: [
          'Dosis: 5g IV (2 dosis de 2.5g)',
          'Administrar como dos infusiones consecutivas',
          'Sin ajuste de dosis para función renal'
        ]
      },
      supportive: {
        title: 'Medidas de Soporte',
        list: [
          'Reanimación con volumen',
          'Transfusión de GR si es necesario',
          'Medidas hemostáticas locales',
          'Considerar carbón activado si ingesta reciente'
        ]
      }
    }
  },
  reverseHeparin: {
    title: 'Revertir Heparina',
    description: {
      title: 'Descripción',
      text: 'Protocolo para revertir efectos anticoagulantes de heparina no fraccionada'
    },
    treatment: {
      title: 'Tratamiento',
      protamine: {
        title: 'Sulfato de Protamina',
        dosing: [
          '1mg protamina por 100 unidades HNF si < 30 min',
          '0.5mg protamina por 100 unidades HNF si 30-60 min',
          '0.25mg protamina por 100 unidades HNF si 60-120 min'
        ],
        administration: [
          'Dosis única máxima: 50mg',
          'Velocidad máxima: 5mg/min',
          'Monitorizar TTPa después de la administración'
        ]
      }
    },
    monitoring: {
      title: 'Monitorización',
      list: [
        'Signos vitales',
        'TTPa',
        'Sitios de sangrado',
        'Signos de reacción alérgica'
      ]
    }
  },
  transfusePlatelets: {
    title: 'Transfundir Plaquetas',
    indications: {
      title: 'Indicaciones',
      therapeutic: {
        title: 'Terapéuticas',
        list: [
          'Sangrado activo con trombocitopenia',
          'Sangrado grave independientemente del recuento',
          'CID con sangrado'
        ]
      },
      prophylactic: {
        title: 'Profilácticas',
        list: [
          'Recuento < 10,000 (paciente estable)',
          'Recuento < 20,000 (con factores de riesgo)',
          'Recuento < 50,000 (antes de procedimiento invasivo)'
        ]
      }
    },
    administration: {
      title: 'Administración',
      dosing: {
        title: 'Dosificación',
        list: [
          'Dosis adulto: 1 unidad por 10kg de peso corporal',
          'Dosis típica adulto: 4-6 unidades',
          'Infundir en 15-30 minutos'
        ]
      },
      monitoring: {
        title: 'Monitorización',
        list: [
          'Incremento del recuento plaquetario',
          'Síntomas de sangrado',
          'Reacciones transfusionales'
        ]
      }
    }
  },
  fibrinogenDeficit: {
    title: 'Déficit de Fibrinógeno',
    assessment: {
      title: 'Evaluación',
      list: [
        'Verificar nivel de fibrinógeno',
        'Rango normal: 200-400 mg/dL',
        'Nivel crítico < 100 mg/dL'
      ]
    },
    treatment: {
      title: 'Tratamiento',
      cryoprecipitate: {
        title: 'Crioprecipitado',
        list: [
          'Dosis inicial: 10 unidades',
          'Cada unidad contiene ~250mg de fibrinógeno',
          'Aumento esperado: 60-100 mg/dL'
        ]
      },
      concentrate: {
        title: 'Concentrado de Fibrinógeno',
        list: [
          'Dosis: 30-60 mg/kg',
          'Reconstituir según fabricante',
          'Administrar lentamente IV'
        ]
      }
    },
    monitoring: {
      title: 'Monitorización',
      list: [
        'Repetir nivel de fibrinógeno',
        'Parámetros de coagulación',
        'Sangrado clínico'
      ]
    }
  },
  hemophilia: {
    title: 'Hemofilia',
    assessment: {
      title: 'Evaluación',
      list: [
        'Determinar tipo de hemofilia (A o B)',
        'Evaluar nivel de factor',
        'Evaluar gravedad del sangrado'
      ]
    },
    treatment: {
      title: 'Tratamiento',
      hemophiliaA: {
        title: 'Hemofilia A',
        list: [
          'Concentrado de factor VIII',
          'Dosis basada en aumento de nivel deseado',
          'Sangrado menor: nivel 20-40%',
          'Sangrado mayor: nivel 80-100%'
        ]
      },
      hemophiliaB: {
        title: 'Hemofilia B',
        list: [
          'Concentrado de factor IX',
          'Dosis basada en aumento de nivel deseado',
          'Sangrado menor: nivel 20-40%',
          'Sangrado mayor: nivel 60-100%'
        ]
      }
    },
    monitoring: {
      title: 'Monitorización',
      list: [
        'Niveles de factor',
        'Respuesta clínica',
        'Desarrollo de inhibidores',
        'Complicaciones'
      ]
    }
  }
};