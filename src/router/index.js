import { watch } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { site } from '../data/site'
import { t, locale } from '../i18n'

import Home from '../pages/Home.vue'
import Product from '../pages/Product.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { titleKey: 'seo.home.title', descKey: 'seo.home.desc' },
  },
  {
    path: '/products',
    name: 'products',
    component: Product,
    meta: { titleKey: 'seo.products.title', descKey: 'seo.products.desc' },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: { titleKey: 'seo.about.title', descKey: 'seo.about.desc' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: { titleKey: 'seo.contact.title', descKey: 'seo.contact.desc' },
  },
  // Product detail uses a query param: /products?p=nylon-cable-tie
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

/** Write <title> and <meta name="description"> for the active locale. */
function applyMeta(to) {
  const meta = to.meta || {}
  const title = meta.titleKey ? t(meta.titleKey) : ''
  const desc = meta.descKey ? t(meta.descKey) : ''

  document.title = title ? `${title} | ${site.brand}` : site.brand

  const el = document.querySelector('meta[name="description"]')
  if (el && desc) el.setAttribute('content', desc)
}

router.afterEach((to) => applyMeta(to))

// Re-apply when the visitor switches language
watch(locale, () => applyMeta(router.currentRoute.value))

export default router
