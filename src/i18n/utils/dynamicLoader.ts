import { I18n } from 'i18n-js';

interface TranslationModule {
  default: any;
}

const translationCache = new Map<string, any>();

// Helper function to load translations dynamically
export async function loadTranslation(category: string, procedure: string, locale: string): Promise<any> {
  const cacheKey = `${category}-${procedure}-${locale}`;
  
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey);
  }
  
  try {
    let translation: any;
    
    // Load based on category and procedure
    switch (category) {
      case 'bloodPressure':
        translation = await import(`../translations/procedures/bloodPressure/${procedure}/${locale}`);
        break;
      case 'infusions':
        translation = await import(`../translations/procedures/infusions/${locale}`);
        break;
      case 'calculator':
        translation = await import(`../translations/procedures/calculator/${locale}`);
        break;
      case 'drugs':
        translation = await import(`../translations/procedures/drugs/${locale}`);
        break;
      case 'opioids':
        translation = await import(`../translations/procedures/opioids/${locale}`);
        break;
      case 'bleeding':
        translation = await import(`../translations/procedures/bleeding/${locale}`);
        break;
      case 'glycemia':
        translation = await import(`../translations/procedures/glycemia/${locale}`);
        break;
      case 'transfusions':
        translation = await import(`../translations/procedures/transfusions/${locale}`);
        break;
      case 'electrolytes':
        translation = await import(`../translations/procedures/electrolytes/${locale}`);
        break;
      default:
        throw new Error(`Unknown category: ${category}`);
    }
    
    const result = translation.default || translation;
    translationCache.set(cacheKey, result);
    return result;
    
  } catch (error) {
    console.warn(`Failed to load translation for ${category}/${procedure}/${locale}:`, error);
    return {};
  }
}

// Function to load common translations
export async function loadCommonTranslations(locale: string): Promise<any> {
  const cacheKey = `common-${locale}`;
  
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey);
  }
  
  try {
    const translation = await import(`../translations/common/${locale}`);
    const result = translation.default || translation;
    translationCache.set(cacheKey, result);
    return result;
  } catch (error) {
    console.warn(`Failed to load common translations for ${locale}:`, error);
    return {};
  }
}

// Function to clear translation cache
export function clearTranslationCache(): void {
  translationCache.clear();
}