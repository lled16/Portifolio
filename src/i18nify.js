import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './assets/locales/en.json';
import ptTranslation from './assets/locales/pt.json';


const resources = {
    en: {
        translation: enTranslation
    },
    pt: {
        translation: ptTranslation
    }
};


i18n
    .use(initReactI18next)
    .init({
        resources,
        debug: true,
        lng: 'pt',
        fallbacklng: 'pt',
        interpolation: {
            escapeValue: false,
        },
        react: {
            wait: true,
        }
    });

export default i18n;