import { createRouter, createWebHistory } from 'vue-router'
import { site } from '../data/site'

import Home from '../pages/Home.vue'
import Product from '../pages/Product.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', name: 'home', component: Home, meta: { title: 'Nylon Cable Tie Manufacturer & Supplier', description: 'Factory-direct PA66 nylon cable ties, UV resistant ties, releasable ties and stainless steel ties. ISO 9001 certified, OEM/ODM supported, free samples.' } },
  { path: '/products', name: 'products', component: Product, meta: { title: 'Products - Nylon Cable Ties', description: 'Browse our full range of nylon cable ties: standard PA66, UV resistant, releasable, heavy duty, stainless steel and colored ties with full specifications.' } },
  { path: '/about', name: 'about', component: About, meta: { title: 'About Us - Cable Tie Factory', description: '18 years of cable tie manufacturing experience, 12,000 m2 facility, 46 injection molding lines, ISO 9001 / UL / CE / RoHS certified.' } },
  { path: '/contact', name: 'contact', component: Contact, meta: { title: 'Contact & Inquiry', description: 'Send us an inquiry for nylon cable ties. Free samples, quotation within 12 hours, factory direct price.' } },
  // Product detail: /products?p=nylon-cable-tie
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

// Basic SEO: update document title & meta description on every navigation
router.afterEach((to) => {
  const { title, description } = to.meta || {}
  document.title = title
    ? `${title} | ${site.brand}`
    : `${site.brand} - Nylon Cable Tie Manufacturer`
  const el = document.querySelector('meta[name="description"]')
  if (el && description) el.setAttribute('content', description)
})

export default router
