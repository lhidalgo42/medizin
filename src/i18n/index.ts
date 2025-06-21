import { I18n } from 'i18n-js';
import commonEn from './translations/common/en';
import commonEs from './translations/common/es';


const i18n = new I18n({
  en: {
    ...commonEn
  },
  es: {
    ...commonEs
  }
});

// Establecer el idioma predeterminado
i18n.defaultLocale = 'en';

// Configurar para usar el idioma del sistema o el seleccionado por el usuario
i18n.locale = 'en'; // Esto debería actualizarse desde el store del idioma
i18n.enableFallback = true;

export default i18n;
