import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import moment from 'moment-timezone';
import { initReactI18next } from 'react-i18next';
import ptbr from './locales/pt-BR';

moment.tz.setDefault('America/Sao_Paulo');

const resources = {
  'pt-BR': ptbr,
};

const format = (value: Date | string, pattern: string | undefined): string =>
  value instanceof Date ? moment(value).format(pattern) : value;

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'pt-BR',
    resources,
    fallbackLng: false,
    load: 'currentOnly',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
      format,
    },
  });

export default i18n;
