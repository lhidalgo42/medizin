export default {
  saline: {
    title: 'Infusión de Solución Salina',
    peripheralRoute: {
      title: 'Vía Periférica',
      components: {
        ampoules: 'Ampollas de 20cc de NaCl al 10%',
        solution: '1L de agua bidestilada',
        instructions: 'Retirar 150cc',
        add: 'Agregar 7.5 ampollas de NaCl al 10% (150cc)',
        naclContent: '(15g de NaCl)'
      },
      result: '1L de Solución Salina al 1.5%\n255 meq de Na en 1L\nOsm: 510 mosm/lt'
    },
    centralRoute: {
      title: 'Vía Central (CVC)',
      components: {
        ampoules: 'Ampollas de 20cc de NaCl al 10%',
        solution: '1L de agua bidestilada',
        instructions: 'Retirar 300cc',
        add: 'Agregar 15 ampollas de NaCl al 10% (300cc)',
        naclContent: '(30g de NaCl)'
      },
      result: '1L de Solución Salina al 3%\n510 meq Na en 1L\nOsm: 1020 mosm/lt'
    },
    hyponatremiaInfusion: {
      title: 'Infusión en Hiponatremia',
      steps: [
        'Meq requeridos: (Na objetivo - Na medido) x agua corporal total (ACT)',
        'ACT: peso x (0.6 si hombre de mediana edad; x 0.5 si mujer de mediana edad o hombre anciano; x 0.45 si mujer anciana)',
        'En SIADH elegir infusión que exceda la osmolaridad urinaria del paciente',
        'Calcular cc requeridos según meq/lt de la solución elegida; infundir en 24h',
        'Monitorizar Na plasmático cada 4-6 hrs (las fórmulas son imprecisas)'
      ]
    },
    bolus: {
      title: 'Bolo',
      instructions: '150cc de NaCl al 3% en 20 min',
      notes: [
        'Hasta 3 veces. Monitorizar Na(p) 20 min después del bolo',
        'Usar vía periférica si no se dispone de CVC'
      ]
    },
    reminder: 'Recordar: objetivo = 4-6 meq/día y límite = 10 meq/día'
  },
  calcium: {
    title: 'Infusión de Calcio',
    peripheralRoute: {
      title: 'Vía Periférica',
      components: {
        ampoules: 'Ampollas de 10cc de Gluconato de Calcio al 10%',
        solution: '1L de DW al 5% o NS al 0.9%',
        instructions: 'Retirar 110cc',
        add: 'Agregar 11 ampollas de Gluconato de Calcio al 10% (110cc)',
        calciumContent: '11g de Gluconato de Calcio\n1g = 90mg de Ca elemental'
      },
      result: '990mg de calcio elemental en 1L (1mg/ml)'
    },
    centralRoute: {
      title: 'Vía Central (CVC)',
      components: {
        ampoules: 'Ampollas de 10cc de Gluconato de Calcio al 10%',
        solution: '500cc de DW al 5% o NS al 0.9%',
        instructions: 'Retirar 110cc',
        add: 'Agregar 11 ampollas de Gluconato de Calcio al 10% (110cc)',
        calciumContent: '11g de Gluconato de Calcio\n1g = 90mg de Ca elemental'
      },
      result: '990mg de calcio elemental en 500cc (2mg/ml)'
    },
    hypocalcemiaInfusion: {
      title: 'Infusión en Hipocalcemia',
      steps: [
        'Iniciar infusión a: 0.5 mg/kg/hr = 0.5 ml/kg/hr (si diluido en 1L) o 0.25 ml/kg/hr (si diluido en 500cc)',
        'Monitorizar Calcemia o Calcio Iónico cada 4-6 hrs',
        'Aumentar dosis hasta 2 mg/kg/hr según necesidad'
      ]
    },
    bolus: {
      title: 'Bolo',
      instructions: '2 ampollas en 100cc DW al 5% en 5-10 min'
    },
    warning: 'Requiere monitorización'
  },
  bicarbonate: {
    title: 'Infusión de Bicarbonato',
    peripheralRoute: {
      title: 'Vía Periférica',
      steps: [
        'Retirar 250cc de agua bidestilada',
        'Agregar 250cc de solución de NaHCO3 2/3 M'
      ],
      result: '1L de Solución 1/6 M',
      specifications: [
        'Osm: 333 mosm/lt (similar a SF 0.9%)',
        'HCO3: 166.7 meq/lt (0.16 meq/ml)',
        'Na: 166.7 meq/lt'
      ]
    },
    centralRoute: {
      title: 'Vía Central (CVC)',
      instructions: 'Usar solución de NaHCO3 2/3 M',
      result: '1L de Solución 2/3 M',
      specifications: [
        'Osm: 1333 mosm/lt',
        'HCO3: 666.7 meq/lt (0.66 meq/ml)',
        'Na: 666.7 meq/lt'
      ]
    },
    considerations: {
      title: 'Considerar HCO3 en: PH < 7.1 con HCO3 <6-10',
      note: '(especialmente en acidosis metabólica hiperclorémica aguda)',
      guidelines: [
        'Calcular déficit de HCO3 (usar solo como estimación). Objetivo: PH 7.2',
        '50% del déficit en 4 hrs (< 1-2 meq/kg), resto en 24-48 hrs',
        'En paro cardiorrespiratorio: 1 meq/kg y reevaluar',
        '1/6 M: administración sin restricciones. Vigilar sobrecarga de volumen',
        '2/3 M: ritmo según natremia (no más de 0.5 meq/lt/hr de aumento de Na)',
        'Monitorizar: PH, PaCO2, Na, K, Ca iónico'
      ]
    },
    ketoacidosis: {
      title: 'Cetoacidosis (si PH < 6.9)',
      instructions: [
        '150 ml de HCO3 2/3 M o 100 ml de HCO3 al 8.4%',
        'Diluir en: 400 ml de agua bidestilada',
        'Agregar: 20 meq de K (si K < 5.3 meq/lt)',
        '(2 amp KCL=26 meq / 2 amp K monofosfato: 22 meq)',
        'Infundir en: 2 hrs',
        'Repetir si persiste PH < 6.9'
      ]
    }
  }
};