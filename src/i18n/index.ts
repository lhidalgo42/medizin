import { I18n } from 'i18n-js';
import commonEn from './translations/common/en';
import commonEs from './translations/common/es';

import hypertensiveCrisisEn from './translations/procedures/bloodPressure/hypertensiveCrisis/en';
import hypotensionEn from './translations/procedures/bloodPressure/hypotension/en';
import persistentHypotensionEn from './translations/procedures/bloodPressure/persistentHypotension/en';
import infusionsEn from './translations/procedures/infusions/en';
import calculatorEn from './translations/procedures/calculator/en';
import drugsEn from './translations/procedures/drugs/en';
import opioidsEn from './translations/procedures/opioids/en';
import bleedingEn from './translations/procedures/bleeding/en';
import glycemiaEn from './translations/procedures/glycemia/en';
import transfusionsEn from './translations/procedures/transfusions/en';
import electrolytesEn from './translations/procedures/electrolytes/en';

// Importaciones de archivos en español
import hypertensiveCrisisEs from './translations/procedures/bloodPressure/hypertensiveCrisis/es';
import hypotensionEs from './translations/procedures/bloodPressure/hypotension/es';
import persistentHypotensionEs from './translations/procedures/bloodPressure/persistentHypotension/es';
import infusionsEs from './translations/procedures/infusions/es';
import calculatorEs from './translations/procedures/calculator/es';
import drugsEs from './translations/procedures/drugs/es';
import opioidsEs from './translations/procedures/opioids/es';
import bleedingEs from './translations/procedures/bleeding/es';
import glycemiaEs from './translations/procedures/glycemia/es';
import transfusionsEs from './translations/procedures/transfusions/es';
import electrolytesEs from './translations/procedures/electrolytes/es';

const i18n = new I18n({
  en: {
    ...commonEn,
    procedures: {
      bloodPressure: {
        hypertensiveCrisis: hypertensiveCrisisEn,
        hypotension: hypotensionEn,
        persistentHypotension: persistentHypotensionEn
      },
      infusions: infusionsEn,
      calculator: calculatorEn,
      drugs: drugsEn,
      opioids: opioidsEn,
      bleeding: bleedingEn,
      glycemia: glycemiaEn,
      transfusions: transfusionsEn,
      electrolytes: electrolytesEn
    }
  },
  es: {
    ...commonEs,
    procedures: {
      bloodPressure: {
        hypertensiveCrisis: hypertensiveCrisisEs,
        hypotension: hypotensionEs,
        persistentHypotension: persistentHypotensionEs
      },
      infusions: infusionsEs,
      calculator: calculatorEs,
      drugs: drugsEs,
      opioids: opioidsEs,
      bleeding: bleedingEs,
      glycemia: glycemiaEs,
      transfusions: transfusionsEs,
      electrolytes: electrolytesEs
    }
  }
});

// Establecer el idioma predeterminado
i18n.defaultLocale = 'en';

// Configurar para usar el idioma del sistema o el seleccionado por el usuario
i18n.locale = 'en'; // Esto debería actualizarse desde el store del idioma
i18n.enableFallback = true;

export default i18n;