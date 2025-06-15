export interface ProcedureRoute {
  category: string;
  procedures: string[];
  useDynamicRouting?: boolean;
}

export const procedureRoutes: ProcedureRoute[] = [
  {
    category: 'bleeding',
    procedures: ['reverseTaco', 'reverseHeparin', 'reverseWarfarin', 'reverseXa'],
    useDynamicRouting: true,
  },
  {
    category: 'bloodPressure',
    procedures: ['hypertensiveCrisis', 'hypotension'],
    useDynamicRouting: false, // These have custom implementations
  },
  {
    category: 'calculator',
    procedures: ['bmr', 'bsa', 'bmi', 'waterDeficit', 'HCO3Deficit'],
    useDynamicRouting: true,
  },
  {
    category: 'drugs',
    procedures: ['adrenergic', 'antiarrhythmic', 'sedatives'],
    useDynamicRouting: true,
  },
  {
    category: 'electrolytes',
    procedures: ['hyperkalemia', 'hypokalemia', 'hypernatremia', 'hyponatremia'],
    useDynamicRouting: true,
  },
  {
    category: 'glycemia',
    procedures: ['dka', 'hhs'],
    useDynamicRouting: false,
  },
  {
    category: 'infusions',
    procedures: ['bicarbonate', 'calcium', 'saline'],
    useDynamicRouting: false,
  },
  {
    category: 'opioids',
    procedures: ['conversion', 'reversal'],
    useDynamicRouting: true,
  },
  {
    category: 'transfusions',
    procedures: ['blood', 'platelets', 'plasma'],
    useDynamicRouting: true,
  },
];

// Helper function to check if a route should use dynamic routing
export const shouldUseDynamicRouting = (category: string): boolean => {
  const route = procedureRoutes.find(r => r.category === category);
  return route?.useDynamicRouting ?? false;
};

// Helper function to get all procedures for a category
export const getProceduresForCategory = (category: string): string[] => {
  const route = procedureRoutes.find(r => r.category === category);
  return route?.procedures ?? [];
};