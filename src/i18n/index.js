import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './config/zh'
import en from './config/en'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: window.localStorage.getItem('lang') || 'zh',
  fallbackLocale: 'zh',
  messages: {
    en: {
      ...en
    },
    zh: {
      ...zh
    }
  }
})

export default i18n