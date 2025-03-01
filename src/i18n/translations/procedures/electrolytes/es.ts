export default {
  hyponatremia: {
    title: 'Hiponatremia',
    definition: {
      title: 'Definición',
      text: 'Sodio sérico < 135 mEq/L',
      severity: [
        'Leve: 130-134 mEq/L',
        'Moderada: 125-129 mEq/L',
        'Grave: < 125 mEq/L'
      ]
    },
    symptoms: {
      title: 'Manifestaciones Clínicas',
      mild: [
        'Náuseas',
        'Cefalea',
        'Confusión'
      ],
      severe: [
        'Convulsiones',
        'Coma',
        'Paro respiratorio',
        'Herniación cerebral'
      ]
    },
    treatment: {
      title: 'Tratamiento',
      acute: {
        title: 'Aguda/Grave Sintomática',
        steps: [
          'Solución salina hipertónica 3% (ver infusiones)',
          'Objetivo: aumentar Na 4-6 mEq/L en primeras 6h',
          'Aumento máximo: 8 mEq/L en 24h',
          'Monitorizar Na cada 2-4h'
        ]
      },
      chronic: {
        title: 'Crónica/Asintomática',
        steps: [
          'Restricción de líquidos',
          'Tratar causa subyacente',
          'Corrección máxima: 6-8 mEq/L por 24h'
        ]
      }
    }
  },
  hypernatremia: {
    title: 'Hipernatremia',
    definition: {
      title: 'Definición',
      text: 'Sodio sérico > 145 mEq/L',
      severity: [
        'Leve: 146-150 mEq/L',
        'Moderada: 151-159 mEq/L',
        'Grave: ≥ 160 mEq/L'
      ]
    },
    symptoms: {
      title: 'Manifestaciones Clínicas',
      list: [
        'Sed',
        'Letargo',
        'Debilidad',
        'Irritabilidad',
        'Convulsiones',
        'Coma'
      ]
    },
    treatment: {
      title: 'Tratamiento',
      steps: [
        'Calcular déficit de agua libre',
        'Reponer déficit en 48-72h',
        'Disminución máxima: 10 mEq/L por 24h',
        'Monitorizar Na cada 4-6h'
      ]
    }
  },
  hypokalemia: {
    title: 'Hipokalemia',
    definition: {
      title: 'Definición',
      text: 'Potasio sérico < 3.5 mEq/L',
      severity: [
        'Leve: 3.0-3.4 mEq/L',
        'Moderada: 2.5-2.9 mEq/L',
        'Grave: < 2.5 mEq/L'
      ]
    },
    symptoms: {
      title: 'Manifestaciones Clínicas',
      list: [
        'Debilidad muscular',
        'Fatiga',
        'Estreñimiento',
        'Arritmias',
        'Cambios en ECG (ondas U, depresión ST)'
      ]
    },
    treatment: {
      title: 'Tratamiento',
      oral: {
        title: 'Reposición Oral',
        text: 'KCl 40-100 mEq/día en dosis divididas'
      },
      iv: {
        title: 'Reposición IV',
        steps: [
          'Velocidad máxima: 10-20 mEq/h',
          'Concentración máxima: 40 mEq/L periférico',
          'Monitorizar K cada 4-6h',
          'Monitorizar ECG en casos graves'
        ]
      }
    }
  },
  hyperkalemia: {
    title: 'Hiperkalemia',
    definition: {
      title: 'Definición',
      text: 'Potasio sérico > 5.0 mEq/L',
      severity: [
        'Leve: 5.1-5.9 mEq/L',
        'Moderada: 6.0-6.4 mEq/L',
        'Grave: ≥ 6.5 mEq/L'
      ]
    },
    symptoms: {
      title: 'Manifestaciones Clínicas',
      list: [
        'Debilidad muscular',
        'Parálisis',
        'Arritmias',
        'Cambios en ECG (ondas T picudas, PR prolongado, QRS ancho)'
      ]
    },
    treatment: {
      title: 'Tratamiento',
      membrane: {
        title: 'Estabilización de Membrana',
        steps: [
          'Gluconato de calcio 10% 10mL IV en 2-3 min',
          'Repetir ECG',
          'Puede repetirse la dosis si persisten cambios en ECG'
        ]
      },
      shift: {
        title: 'Desplazamiento Intracelular',
        steps: [
          'Insulina regular 10U + D50W 25g IV',
          'Nebulizador de Albuterol 10-20mg',
          'Bicarbonato de sodio si hay acidosis'
        ]
      },
      elimination: {
        title: 'Eliminación',
        steps: [
          'Diuréticos de asa',
          'Kayexalato 15-30g VO/PR',
          'Considerar diálisis de emergencia'
        ]
      }
    }
  },
  hypocalcemia: {
    title: 'Hipocalcemia',
    definition: {
      title: 'Definición',
      text: 'Calcio corregido < 8.5 mg/dL',
      severity: [
        'Leve: 8.0-8.4 mg/dL',
        'Moderada: 7.0-7.9 mg/dL',
        'Grave: < 7.0 mg/dL'
      ]
    },
    symptoms: {
      title: 'Manifestaciones Clínicas',
      list: [
        'Entumecimiento perioral',
        'Parestesias',
        'Tetania',
        'Signo de Chvostek',
        'Signo de Trousseau',
        'Prolongación del QT'
      ]
    },
    treatment: {
      title: 'Tratamiento',
      acute: {
        title: 'Sintomática Aguda',
        steps: [
          'Gluconato de calcio (ver infusiones)',
          'Monitorizar calcio cada 4-6h',
          'Monitorizar ECG'
        ]
      },
      chronic: {
        title: 'Crónica/Asintomática',
        steps: [
          'Calcio oral + vitamina D',
          'Tratar causa subyacente'
        ]
      }
    }
  },
  hypercalcemia: {
    title: 'Hipercalcemia',
    definition: {
      title: 'Definición',
      text: 'Calcio corregido > 10.5 mg/dL',
      severity: [
        'Leve: 10.5-11.9 mg/dL',
        'Moderada: 12.0-13.9 mg/dL',
        'Grave: ≥ 14.0 mg/dL'
      ]
    },
    symptoms: {
      title: 'Manifestaciones Clínicas',
      list: [
        'Confusión',
        'Debilidad',
        'Estreñimiento',
        'Poliuria',
        'QT acortado',
        'Cálculos renales'
      ]
    },
    treatment: {
      title: 'Tratamiento',
      initial: {
        title: 'Manejo Inicial',
        steps: [
          'Líquidos IV: NS 200-300 mL/h',
          'Monitorizar producción de orina',
          'Monitorizar electrolitos cada 4-6h'
        ]
      },
      medications: {
        title: 'Medicamentos',
        list: [
          'Calcitonina 4-8 U/kg SC c/12h',
          'Bifosfonatos',
          'Considerar glucocorticoides'
        ]
      }
    }
  }
};