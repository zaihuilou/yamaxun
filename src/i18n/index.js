/**
 * Lightweight i18n - no external dependency.
 *
 * Usage in a component:
 *   import { t, tv, locale, setLocale, locales } from '../i18n'
 *   t('nav.home')            -> UI string in the active language
 *   t('product.count', { n: 6 })  -> supports {{n}} interpolation
 *   tv(product.name)         -> picks .en / .zh from a bilingual data field
 */

import { ref, watch } from 'vue'
import en from './en'
import zh from './zh'

const dicts = { en, zh }
const STORAGE_KEY = 'sxpackage-locale-v2'

export const locales = [
  { code: 'en', short: 'EN', label: 'English' },
  { code: 'zh', short: '中文', label: '简体中文' },
]

function detectLocale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && dicts[saved]) return saved
  } catch (e) {
    /* localStorage may be unavailable */
  }
  return 'en'
}

export const locale = ref(detectLocale())

/** Translate a UI string key, with optional {{param}} interpolation. */
export function t(key, params) {
  let str = (dicts[locale.value] && dicts[locale.value][key]) ?? en[key] ?? key
  if (params) {
    Object.keys(params).forEach((k) => {
      str = str.split(`{{${k}}}`).join(params[k])
    })
  }
  return str
}

/**
 * Translate a bilingual data value.
 * Accepts a plain string (shared by both languages) or { en, zh }.
 */
export function tv(value) {
  if (value === null || value === undefined) return ''
  if (typeof value === 'string' || typeof value === 'number') return value
  return value[locale.value] ?? value.en ?? ''
}

export function setLocale(code) {
  if (dicts[code]) locale.value = code
}

export function toggleLocale() {
  setLocale(locale.value === 'en' ? 'zh' : 'en')
}

watch(
  locale,
  (v) => {
    try {
      localStorage.setItem(STORAGE_KEY, v)
    } catch (e) {
      /* ignore */
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = v === 'zh' ? 'zh-CN' : 'en'
    }
  },
  { immediate: true }
)
