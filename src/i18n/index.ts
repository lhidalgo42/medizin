import { I18n } from 'i18n-js';
import commonEn from './translations/common/en';
import bloodPressureEn from './translations/procedures/bloodPressure/en';
import infusionsEn from './translations/procedures/infusions/en';
import calculatorEn from './translations/procedures/calculator/en';
import electrolytesEn from './translations/procedures/electrolytes/en';

const i18n = new I18n({
  en: {
    ...commonEn,
    procedures: {
      bloodPressure: bloodPressureEn,
      infusions: infusionsEn,
      calculator: calculatorEn,
      electrolytes: electrolytesEn,
    }
  }
});

i18n.defaultLocale = 'en';
i18n.locale = 'en';
i18n.enableFallback = true;

export default i18n;