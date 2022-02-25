import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from "react-i18next";
import PTBR from './locales/pt-br.json'
import ENUS from './locales/en-us.json'
import ENGB from './locales/en-gb.json'
import ESES from './locales/es-es.json'

const resources = {
  'pt-BR': PTBR, 
  'en-US': ENUS,
  'en-GB': ENGB,
  'es-ES': ESES
}

i18n.use(LanguageDetector)
.use(initReactI18next)
.init({
  resources,
  lng: navigator.language,
  interpolation: {
    escapeValue: false
  }
})

export default i18n