export default {
  hypoglycemia: {
    title: 'Hipoglucemia',
    definition: {
      title: 'Definición',
      text: 'Glucosa en sangre < 70 mg/dL (< 3.9 mmol/L)',
      severity: [
        'Nivel 1: 54-70 mg/dL (3.0-3.9 mmol/L)',
        'Nivel 2: < 54 mg/dL (< 3.0 mmol/L)',
        'Nivel 3: Deterioro cognitivo grave que requiere asistencia externa'
      ]
    },
    symptoms: {
      title: 'Manifestaciones Clínicas',
      autonomic: {
        title: 'Autonómicas',
        list: [
          'Temblor',
          'Palpitaciones',
          'Ansiedad',
          'Sudoración',
          'Hambre'
        ]
      },
      neuroglycopenic: {
        title: 'Neuroglicopénicas',
        list: [
          'Confusión',
          'Debilidad',
          'Alteraciones visuales',
          'Convulsiones',
          'Pérdida de conciencia'
        ]
      }
    },
    treatment: {
      title: 'Tratamiento',
      conscious: {
        title: 'Paciente Consciente',
        list: [
          'Administrar 15-20g de carbohidratos de acción rápida:',
          '- 4 tabletas de glucosa',
          '- 150 mL de jugo de frutas',
          '- 150 mL de refresco normal',
          'Verificar glucosa en 15 minutos',
          'Repetir tratamiento si la glucosa sigue < 70 mg/dL'
        ]
      },
      unconscious: {
        title: 'Paciente Inconsciente',
        list: [
          'Dextrosa 50%: 25-50 mL IV',
          'O Glucagón:',
          '- 1 mg IM/SC/IV',
          '- Puede repetirse en 15 minutos',
          'Monitorizar glucosa cada 15 minutos hasta estabilidad'
        ]
      },
      maintenance: {
        title: 'Mantenimiento',
        list: [
          'Una vez que la glucosa > 70 mg/dL:',
          'Dar merienda con carbohidratos complejos + proteína',
          'Revisar causa de hipoglucemia',
          'Ajustar medicamentos para diabetes si es necesario'
        ]
      }
    }
  },
  diabeticKetoacidosis: {
    title: 'Cetoacidosis Diabética (CAD)',
    definition: {
      title: 'Criterios Diagnósticos',
      list: [
        'Hiperglucemia (> 250 mg/dL)',
        'Cetosis',
        'Acidosis (pH < 7.3 o bicarbonato < 15 mEq/L)'
      ]
    },
    assessment: {
      title: 'Evaluación Inicial',
      vital: {
        title: 'Signos Vitales',
        list: [
          'Presión arterial',
          'Frecuencia cardíaca',
          'Frecuencia respiratoria',
          'Temperatura',
          'Estado mental'
        ]
      },
      laboratory: {
        title: 'Pruebas de Laboratorio',
        list: [
          'Glucosa en sangre',
          'Electrolitos',
          'Gases sanguíneos',
          'Cetonas',
          'Hemograma completo',
          'Función renal'
        ]
      }
    },
    treatment: {
      title: 'Tratamiento',
      fluids: {
        title: 'Reanimación con Líquidos',
        list: [
          'Inicial: 1-1.5 L/hr de solución salina normal',
          'Subsecuente: Según estado hemodinámico',
          'Monitorizar balance de líquidos cuidadosamente'
        ]
      },
      insulin: {
        title: 'Terapia con Insulina',
        list: [
          'Bolo: 0.1 unidades/kg',
          'Infusión: 0.1 unidades/kg/hr',
          'Titular para disminución de glucosa de 50-75 mg/dL/hr'
        ]
      },
      electrolytes: {
        title: 'Reemplazo de Electrolitos',
        list: [
          'Potasio: Mantener > 4 mEq/L',
          'Bicarbonato: Considerar si pH < 6.9',
          'Fosfato: Reemplazar si < 1 mg/dL'
        ]
      },
      monitoring: {
        title: 'Monitorización',
        list: [
          'Glucosa cada hora',
          'Electrolitos cada 2-4 horas',
          'Entrada/salida',
          'Estado mental',
          'Brecha aniónica'
        ]
      }
    }
  },
  hyperosmolarState: {
    title: 'Estado Hiperglucémico Hiperosmolar (EHH)',
    definition: {
      title: 'Criterios Diagnósticos',
      list: [
        'Hiperglucemia severa (> 600 mg/dL)',
        'Osmolalidad sérica > 320 mOsm/kg',
        'Sin cetosis/acidosis significativa',
        'Estado mental alterado'
      ]
    },
    assessment: {
      title: 'Evaluación Inicial',
      clinical: {
        title: 'Evaluación Clínica',
        list: [
          'Estado mental',
          'Estado de hidratación',
          'Factores precipitantes',
          'Comorbilidades'
        ]
      },
      laboratory: {
        title: 'Pruebas de Laboratorio',
        list: [
          'Glucosa en sangre',
          'Osmolalidad sérica',
          'Electrolitos',
          'Función renal',
          'Hemograma completo'
        ]
      }
    },
    treatment: {
      title: 'Tratamiento',
      fluids: {
        title: 'Reanimación con Líquidos',
        list: [
          'Inicial: 1-1.5 L/hr de solución salina normal',
          'Ajustar según:',
          '- Estado hemodinámico',
          '- Sodio sérico',
          '- Osmolalidad'
        ]
      },
      insulin: {
        title: 'Terapia con Insulina',
        list: [
          'Iniciar después de reanimación inicial con líquidos',
          'Dosis menor que en CAD:',
          '- 0.05-0.1 unidades/kg/hr',
          'Objetivo de disminución de glucosa: 50-75 mg/dL/hr'
        ]
      },
      electrolytes: {
        title: 'Manejo de Electrolitos',
        list: [
          'Monitorizar potasio de cerca',
          'Reemplazar según necesidad',
          'Vigilar hipernatremia'
        ]
      },
      monitoring: {
        title: 'Monitorización',
        list: [
          'Glucosa cada hora',
          'Electrolitos cada 2-4 horas',
          'Osmolalidad',
          'Estado mental',
          'Balance de líquidos'
        ]
      },
      complications: {
        title: 'Prevenir Complicaciones',
        list: [
          'Profilaxis de TVP',
          'Monitorizar edema cerebral',
          'Vigilar complicaciones cardíacas'
        ]
      }
    }
  }
};