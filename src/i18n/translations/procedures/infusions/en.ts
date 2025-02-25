export default {
  saline: {
    title: 'Saline Solution Infusion',
    peripheralRoute: {
      title: 'Peripheral Route',
      components: {
        ampoules: '20cc ampoules of 10% NaCl',
        solution: '1L bidistilled water',
        instructions: 'Remove 150cc',
        add: 'Add 7.5 ampoules of 10% NaCl (150cc)',
        naclContent: '(15g of NaCl)'
      },
      result: '1L of 1.5% Saline Solution\n255 meq of Na in 1L\nOsm: 510 mosm/lt'
    },
    centralRoute: {
      title: 'Central Route (CVC)',
      components: {
        ampoules: '20cc ampoules of 10% NaCl',
        solution: '1L bidistilled water',
        instructions: 'Remove 300cc',
        add: 'Add 15 ampoules of 10% NaCl (300cc)',
        naclContent: '(30g of NaCl)'
      },
      result: '1L of 3% Saline Solution\n510 meq Na in 1L\nOsm: 1020 mosm/lt'
    },
    hyponatremiaInfusion: {
      title: 'Infusion in Hyponatremia',
      steps: [
        'Required meq: (Target Na - Measured Na) x total body water (TBW)',
        'TBW: weight x (0.6 if middle-aged male; x 0.5 if middle-aged female or elderly male; x 0.45 if elderly female)',
        'In SIADH choose infusion that exceeds patient\'s urinary osmolarity',
        'Calculate required cc according to meq/lt of chosen solution; infuse over 24h',
        'Monitor plasma Na every 4-6 hrs (formulas are imprecise)'
      ]
    },
    bolus: {
      title: 'Bolus',
      instructions: '150cc of 3% NaCl over 20 min',
      notes: [
        'Up to 3 times. Monitor Na(p) 20 min post bolus',
        'Use peripheral route if CVC not available'
      ]
    },
    reminder: 'Remember: goal = 4-6 meq/day and limit = 10 meq/day'
  },
  calcium: {
    title: 'Calcium Infusion',
    peripheralRoute: {
      title: 'Peripheral Route',
      components: {
        ampoules: '10cc ampoules of 10% Calcium Gluconate',
        solution: '1L of 5% DW or 0.9% NS',
        instructions: 'Remove 110cc',
        add: 'Add 11 ampoules of 10% Calcium Gluconate (110cc)',
        calciumContent: '11g of Calcium Gluconate\n1g = 90mg elemental Ca'
      },
      result: '990mg elemental calcium in 1L (1mg/ml)'
    },
    centralRoute: {
      title: 'Central Route (CVC)',
      components: {
        ampoules: '10cc ampoules of 10% Calcium Gluconate',
        solution: '500cc of 5% DW or 0.9% NS',
        instructions: 'Remove 110cc',
        add: 'Add 11 ampoules of 10% Calcium Gluconate (110cc)',
        calciumContent: '11g of Calcium Gluconate\n1g = 90mg elemental Ca'
      },
      result: '990mg elemental calcium in 500cc (2mg/ml)'
    },
    hypocalcemiaInfusion: {
      title: 'Infusion in Hypocalcemia',
      steps: [
        'Start infusion at: 0.5 mg/kg/hr = 0.5 ml/kg/hr (if diluted in 1L) or 0.25 ml/kg/hr (if diluted in 500cc)',
        'Monitor Calcemia or Ionic Calcium every 4-6 hrs',
        'Increase dose up to 2 mg/kg/hr as needed'
      ]
    },
    bolus: {
      title: 'Bolus',
      instructions: '2 ampoules in 100cc 5% DW over 5-10 min'
    },
    warning: 'Requires monitoring'
  },
  bicarbonate: {
    title: 'Bicarbonate Infusion',
    peripheralRoute: {
      title: 'Peripheral Route',
      steps: [
        'Remove 250cc bidistilled water',
        'Add 250cc NaHCO3 2/3 M solution'
      ],
      result: '1L of 1/6 M Solution',
      specifications: [
        'Osm: 333 mosm/lt (similar to SF 0.9%)',
        'HCO3: 166.7 meq/lt (0.16 meq/ml)',
        'Na: 166.7 meq/lt'
      ]
    },
    centralRoute: {
      title: 'Central Route (CVC)',
      instructions: 'Use NaHCO3 2/3 M solution',
      result: '1L of 2/3 M Solution',
      specifications: [
        'Osm: 1333 mosm/lt',
        'HCO3: 666.7 meq/lt (0.66 meq/ml)',
        'Na: 666.7 meq/lt'
      ]
    },
    considerations: {
      title: 'Consider HCO3 in: PH < 7.1 with HCO3 <6-10',
      note: '(especially in acute hyperchloremic metabolic acidosis)',
      guidelines: [
        'Calculate HCO3 deficit (use only as estimation). Goal: PH 7.2',
        '50% of deficit in 4 hrs (< 1-2 meq/kg), rest in 24-48 hrs',
        'In cardiorespiratory arrest: 1 meq/kg and recheck',
        '1/6 M: unrestricted administration. Watch for volume overload',
        '2/3 M: rate according to natremia (no more than 0.5 meq/lt/hr Na increase)',
        'Monitor: PH, PaCO2, Na, K, ionic Ca'
      ]
    },
    ketoacidosis: {
      title: 'Ketoacidosis (if PH < 6.9)',
      instructions: [
        '150 ml HCO3 2/3 M or 100 ml HCO3 8.4%',
        'Dilute in: 400 ml bidistilled water',
        'Add: 20 meq K (if K < 5.3 meq/lt)',
        '(2 amp KCL=26 meq / 2 amp K monophosphate: 22 meq)',
        'Infuse in: 2 hrs',
        'Repeat if PH < 6.9 persists'
      ]
    }
  }
};