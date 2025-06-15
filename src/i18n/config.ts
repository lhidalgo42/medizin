export const supportedLanguages = ['en', 'es'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

export const defaultLanguage: SupportedLanguage = 'en';

export const procedureCategories = [
  'bloodPressure',
  'infusions', 
  'calculator',
  'drugs',
  'opioids',
  'bleeding',
  'glycemia',
  'transfusions',
  'electrolytes'
] as const;

export type ProcedureCategory = (typeof procedureCategories)[number];