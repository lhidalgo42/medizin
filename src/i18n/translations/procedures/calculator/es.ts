export default {
  cirrhosis: {
    title: 'Evaluación de Cirrosis (Child-Pugh, MELD, MELD Na)',
    childPugh: {
      title: 'Puntuación Child-Pugh',
      parameters: [
        'Encefalopatía',
        'Ascitis',
        'Bilirrubina',
        'Albúmina',
        'INR'
      ],
      classes: {
        a: 'Clase A: 5-6 puntos',
        b: 'Clase B: 7-9 puntos',
        c: 'Clase C: 10-15 puntos'
      }
    },
    meld: {
      title: 'Puntuación MELD',
      formula: 'MELD = 3.78×ln[bilirrubina sérica (mg/dL)] + 11.2×ln[INR] + 9.57×ln[creatinina sérica (mg/dL)] + 6.43',
      notes: [
        'Si algún valor es menor a 1.0, usar 1.0',
        'El valor máximo de creatinina sérica para la fórmula es 4.0',
        'Para pacientes que recibieron diálisis dos veces en la última semana, usar valor de creatinina de 4.0'
      ]
    },
    meldNa: {
      title: 'Puntuación MELD-Na',
      formula: 'MELD-Na = MELD - Na - [0.025 × MELD × (140-Na)] + 140',
      notes: [
        'Para valores de Na < 125 mmol/L, usar 125',
        'Para valores de Na > 140 mmol/L, usar 140'
      ]
    }
  },
  hco3Deficit: {
    title: 'Déficit de HCO3',
    formula: 'Déficit de HCO3 = 0.6 × peso × (HCO3 deseado - HCO3 actual)',
    notes: [
      'Peso en kg',
      'HCO3 en mEq/L',
      'HCO3 deseado generalmente 15 mEq/L (para pH > 7.2)'
    ]
  },
  h2oDeficit: {
    title: 'Déficit de H2O',
    formula: 'Déficit de H2O = peso × %deshidratación',
    notes: [
      'Peso en kg',
      'Resultado en mL',
      'Deshidratación leve: 5%',
      'Deshidratación moderada: 7-10%',
      'Deshidratación grave: >10%'
    ]
  },
  qtInterval: {
    title: 'Intervalo QT Corregido',
    bazett: {
      title: 'Fórmula de Bazett',
      formula: 'QTc = QT/√RR',
      notes: [
        'QT en segundos',
        'RR en segundos',
        'Valores normales:',
        '- Hombres: < 450 ms',
        '- Mujeres: < 470 ms'
      ]
    },
    fridericia: {
      title: 'Fórmula de Fridericia',
      formula: 'QTc = QT/∛RR',
      notes: [
        'Más precisa en frecuencias cardíacas extremas',
        'Mismos valores normales que Bazett'
      ]
    }
  },
  correctedCalcium: {
    title: 'Calcio Corregido',
    formula: 'Ca Corregido = Ca Total + 0.8 × (4 - albúmina)',
    notes: [
      'Calcio en mg/dL',
      'Albúmina en g/dL',
      'Rango normal: 8.5-10.5 mg/dL'
    ]
  },
  renalFunction: {
    title: 'Función Renal',
    ckdEpi: {
      title: 'Fórmula CKD-EPI',
      formula: 'TFG = 141 × min(Scr/κ,1)α × max(Scr/κ,1)-1.209 × 0.993Edad × 1.018[si mujer] × 1.159[si afroamericano]',
      notes: [
        'κ = 0.7 (mujeres) o 0.9 (hombres)',
        'α = -0.329 (mujeres) o -0.411 (hombres)',
        'Scr = creatinina sérica en mg/dL'
      ]
    },
    cockcroft: {
      title: 'Fórmula Cockcroft-Gault',
      formula: 'ClCr = [(140-edad) × peso × (0.85 si mujer)] / (72 × Scr)',
      notes: [
        'Edad en años',
        'Peso en kg',
        'Scr = creatinina sérica en mg/dL'
      ]
    }
  },
  plasmaOsmolarity: {
    title: 'Osmolaridad Plasmática',
    formula: 'Osm = (2 × Na) + (glucosa/18) + (BUN/2.8)',
    notes: [
      'Na en mEq/L',
      'Glucosa en mg/dL',
      'BUN en mg/dL',
      'Rango normal: 285-295 mOsm/L'
    ]
  },
  cvcPosition: {
    title: 'Posicionamiento de CVC',
    formula: 'Profundidad (cm) = altura/10 - 2',
    notes: [
      'Altura en cm',
      'Para abordaje yugular interno derecho o subclavio derecho',
      'Agregar 2 cm para abordajes izquierdos'
    ]
  }
};