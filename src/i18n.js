import i18next from 'i18next';
import {
  // imports
  common,
  banner
} from './translations/translation';

i18next.init({
  interpolation: {
    escapeValue: false
  },
  lng: 'en',
  resources: {
    en: {
      // en
      common,
      banner
    }
  }
});

function t(key, options) {
  if (!!options) {
    return i18next.t(key, options);
  } else {
    return i18next.t(key);
  }
}

export { t };

export default i18next;
