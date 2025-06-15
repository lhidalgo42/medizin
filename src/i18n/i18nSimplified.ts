import { I18n } from 'i18n-js';
import { loadCommonTranslations, loadTranslation } from './utils/dynamicLoader';
import { defaultLanguage, type SupportedLanguage } from './config';

class SimplifiedI18n extends I18n {
  private loadedTranslations = new Set<string>();
  
  constructor() {
    super();
    this.defaultLocale = defaultLanguage;
    this.enableFallback = true;
    
    // Initialize with empty translations
    this.translations = {
      [defaultLanguage]: {}
    };
    
    // Load common translations immediately
    this.loadCommonTranslations();
  }
  
  private async loadCommonTranslations() {
    try {
      const commonEn = await loadCommonTranslations('en');
      const commonEs = await loadCommonTranslations('es');
      
      this.translations.en = { ...this.translations.en, ...commonEn };
      this.translations.es = { ...this.translations.es, ...commonEs };
      
      this.loadedTranslations.add('common-en');
      this.loadedTranslations.add('common-es');
    } catch (error) {
      console.warn('Failed to load common translations:', error);
    }
  }
  
  async loadProcedureTranslations(category: string, procedure?: string): Promise<void> {
    const locales: SupportedLanguage[] = ['en', 'es'];
    
    for (const locale of locales) {
      const key = `${category}-${procedure || 'default'}-${locale}`;
      
      if (this.loadedTranslations.has(key)) {
        continue;
      }
      
      try {
        const translation = await loadTranslation(category, procedure || '', locale);
        
        if (!this.translations[locale]) {
          this.translations[locale] = {};
        }
        
        if (!this.translations[locale].procedures) {
          this.translations[locale].procedures = {};
        }
        
        if (procedure) {
          if (!this.translations[locale].procedures[category]) {
            this.translations[locale].procedures[category] = {};
          }
          this.translations[locale].procedures[category][procedure] = translation[procedure] || translation;
        } else {
          this.translations[locale].procedures[category] = translation;
        }
        
        this.loadedTranslations.add(key);
      } catch (error) {
        console.warn(`Failed to load ${key}:`, error);
      }
    }
  }
  
  // Override the t method to load translations on demand
  t(scope: string, options?: any): any {
    // Check if we need to load translations for a procedure
    const match = scope.match(/^procedures\.(\w+)(?:\.(\w+))?/);
    
    if (match) {
      const [, category, procedure] = match;
      const key = `${category}-${procedure || 'default'}-${this.locale}`;
      
      if (!this.loadedTranslations.has(key)) {
        // Load translations asynchronously
        this.loadProcedureTranslations(category, procedure).catch(console.warn);
        
        // Return a placeholder or empty object while loading
        if (options?.returnObjects) {
          return {};
        }
        return scope; // Return the key as fallback
      }
    }
    
    return super.t(scope, options);
  }
}

// Create and export a singleton instance
const i18n = new SimplifiedI18n();
export default i18n;