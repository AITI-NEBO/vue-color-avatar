import { createI18n } from 'vue-i18n'

import { Locale } from '@/enums'

import en from './locales/en'
import ru from './locales/ru'

const messages = { en, ru }

const [locale, fallbackLocale] = /^zh\b/.test(window.navigator.language)
  ? [Locale.RU, Locale.EN]
  : [Locale.EN, Locale.RU]

export default createI18n({
  locale,
  fallbackLocale,
  messages,
})
