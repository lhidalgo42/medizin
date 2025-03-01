export default {
  hemocomponents: {
    title: 'Hemocomponentes',
    redCells: {
      title: 'Glóbulos Rojos',
      indications: {
        title: 'Indicaciones',
        list: [
          'Pérdida aguda de sangre con inestabilidad hemodinámica',
          'Anemia sintomática',
          'Hb < 7 g/dL en pacientes estables',
          'Hb < 8 g/dL en periodo perioperatorio',
          'Hb < 8 g/dL en enfermedad cardiovascular'
        ]
      },
      administration: {
        title: 'Administración',
        list: [
          'Verificar identificación del paciente',
          'Verificar compatibilidad del grupo sanguíneo',
          'Usar filtro estándar de sangre',
          'Infundir en 2-4 horas',
          'Máximo 4 horas por unidad'
        ]
      },
      monitoring: {
        title: 'Monitorización',
        list: [
          'Signos vitales antes, 15 min después del inicio y cada hora',
          'Vigilar reacciones transfusionales',
          'Documentar volumen y tiempo',
          'Verificar Hb post-transfusión'
        ]
      }
    },
    platelets: {
      title: 'Plaquetas',
      indications: {
        title: 'Indicaciones',
        list: [
          'Sangrado activo con trombocitopenia',
          'Profilaxis en trombocitopenia severa',
          'Antes de procedimientos invasivos',
          'Disfunción plaquetaria'
        ]
      },
      dosing: {
        title: 'Dosificación',
        list: [
          'Una unidad por 10 kg de peso corporal',
          'Dosis típica adulto: 4-6 unidades',
          'Aumento esperado: 30-50,000/μL por unidad'
        ]
      },
      administration: {
        title: 'Administración',
        list: [
          'Temperatura ambiente',
          'Infusión rápida (15-30 minutos)',
          'No requiere filtro especial',
          'No refrigerar'
        ]
      }
    },
    plasma: {
      title: 'Plasma Fresco Congelado',
      indications: {
        title: 'Indicaciones',
        list: [
          'Deficiencia de múltiples factores de coagulación',
          'Transfusión masiva',
          'Reversión de warfarina con sangrado',
          'CID con sangrado'
        ]
      },
      dosing: {
        title: 'Dosificación',
        list: [
          'Inicial: 10-15 mL/kg',
          'Repetir según pruebas de coagulación',
          'Considerar estado de volumen del paciente'
        ]
      },
      administration: {
        title: 'Administración',
        list: [
          'Debe ser compatible con ABO',
          'Descongelar antes de usar',
          'Usar dentro de las 24 horas después de descongelar',
          'Infundir en 30 minutos por unidad'
        ]
      }
    },
    cryoprecipitate: {
      title: 'Crioprecipitado',
      indications: {
        title: 'Indicaciones',
        list: [
          'Fibrinógeno < 100 mg/dL',
          'Enfermedad de von Willebrand',
          'Hemofilia A',
          'Deficiencia de factor XIII'
        ]
      },
      dosing: {
        title: 'Dosificación',
        list: [
          'Dosis adulto: 10 unidades',
          'Pediátrico: 1 unidad por 5-10 kg',
          'Contiene ~250 mg de fibrinógeno por unidad'
        ]
      },
      administration: {
        title: 'Administración',
        list: [
          'Agrupar unidades antes de la administración',
          'Usar dentro de 6 horas después de descongelar',
          'Infundir rápidamente',
          'Filtro de sangre estándar'
        ]
      }
    }
  },
  reactions: {
    title: 'Reacciones Transfusionales',
    acute: {
      title: 'Reacciones Agudas',
      allergic: {
        title: 'Alérgica',
        symptoms: [
          'Urticaria',
          'Prurito',
          'Enrojecimiento',
          'Angioedema'
        ],
        management: [
          'Detener transfusión',
          'Antihistamínicos',
          'Puede reanudarse si es leve y los síntomas desaparecen',
          'Documentar reacción'
        ]
      },
      febrile: {
        title: 'Febril No Hemolítica',
        symptoms: [
          'Aumento de temperatura ≥ 1°C',
          'Escalofríos',
          'Rigidez',
          'Sin otra causa identificada'
        ],
        management: [
          'Detener transfusión',
          'Antipiréticos',
          'Descartar reacción hemolítica',
          'Usar productos leucorreducidos en el futuro'
        ]
      },
      hemolytic: {
        title: 'Hemolítica Aguda',
        symptoms: [
          'Fiebre',
          'Escalofríos',
          'Dolor lumbar',
          'Hipotensión',
          'Orina oscura',
          'Sangrado'
        ],
        management: [
          'Detener transfusión inmediatamente',
          'Mantener acceso IV',
          'Enviar muestras de sangre',
          'Mantener presión arterial',
          'Monitorizar producción de orina',
          'Considerar tratamiento para CID'
        ]
      },
      taco: {
        title: 'TACO (Sobrecarga Circulatoria)',
        symptoms: [
          'Disnea',
          'Ortopnea',
          'Hipertensión',
          'Edema pulmonar'
        ],
        management: [
          'Detener transfusión',
          'Posición vertical',
          'Diuréticos',
          'Oxigenoterapia',
          'Monitorizar signos vitales'
        ]
      },
      trali: {
        title: 'TRALI',
        symptoms: [
          'Dificultad respiratoria aguda',
          'Hipoxemia',
          'Infiltrados bilaterales',
          'Sin evidencia de sobrecarga'
        ],
        management: [
          'Detener transfusión',
          'Cuidados de soporte',
          'Oxigenoterapia',
          'Puede necesitar ventilación',
          'Informar al banco de sangre'
        ]
      }
    },
    delayed: {
      title: 'Reacciones Tardías',
      hemolytic: {
        title: 'Hemolítica Tardía',
        symptoms: [
          'Fiebre',
          'Ictericia',
          'Hemoglobina decreciente',
          'Ocurre 3-10 días post-transfusión'
        ],
        management: [
          'Monitorizar hemoglobina',
          'Soporte según necesidad',
          'Evitar donante implicado',
          'Actualizar historial de anticuerpos'
        ]
      },
      gvhd: {
        title: 'EICH Asociada a Transfusión',
        symptoms: [
          'Fiebre',
          'Erupción',
          'Diarrea',
          'Disfunción hepática',
          'Pancitopenia'
        ],
        management: [
          'Cuidados de soporte',
          'Usualmente fatal',
          'Prevención con productos irradiados',
          'Informar al banco de sangre'
        ]
      }
    },
    prevention: {
      title: 'Estrategias de Prevención',
      list: [
        'Identificación adecuada del paciente',
        'Verificar compatibilidad del producto sanguíneo',
        'Monitorizar signos vitales',
        'Velocidad inicial de infusión lenta',
        'Reconocer signos tempranos',
        'Tener medicamentos de emergencia listos',
        'Documentar todas las reacciones'
      ]
    }
  }
};