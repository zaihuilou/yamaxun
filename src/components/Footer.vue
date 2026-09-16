<script setup>
import { site } from '../data/site'
import { categories } from '../data/products'
import { t, tv } from '../i18n'

const year = new Date().getFullYear()

const quickLinks = [
  { to: '/', labelKey: 'nav.home' },
  { to: '/products', labelKey: 'nav.products' },
  { to: '/contact', labelKey: 'nav.contact' },
]
</script>

<template>
  <footer class="footer">
    <div class="container footer__top">
      <div class="footer__brand">
        <div class="logo">
          <span class="logo__mark">SX</span>
          <strong>{{ site.brand }}</strong>
        </div>
        <p class="footer__desc">{{ tv(site.description) }}</p>
        <ul class="footer__contact">
          <li>{{ t('footer.email') }}: <a :href="`mailto:${site.email}`">{{ site.email }}</a></li>
          <li>{{ t('footer.tel') }}: <a :href="`tel:${site.phone.replace(/\s/g, '')}`">{{ site.phone }}</a></li>
          <li>{{ t('footer.wechat') }}: {{ site.wechat }}</li>
        </ul>
        <RouterLink to="/contact" class="btn btn--primary footer__cta">
          {{ t('footer.inquiry') }}
        </RouterLink>
      </div>

      <div>
        <h4>{{ t('footer.quickLinks') }}</h4>
        <ul class="footer__list">
          <li v-for="l in quickLinks" :key="l.to">
            <RouterLink :to="l.to">{{ t(l.labelKey) }}</RouterLink>
          </li>
        </ul>
      </div>

      <div>
        <h4>{{ t('footer.categories') }}</h4>
        <ul class="footer__list">
          <li v-for="c in categories.filter((c) => c.key !== 'all')" :key="c.key">
            <RouterLink :to="`/products?c=${c.key}`">{{ tv(c.label) }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="container footer__bottom">
      <span>© {{ year }} {{ tv(site.legalName) }}. {{ t('footer.rights') }}</span>
      <span>{{ t('footer.certs') }}</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--brand);
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
}

.footer__top {
  display: grid;
  grid-template-columns: 1.8fr 1fr 1fr;
  gap: 40px;
  padding: 64px 24px 48px;
}

.footer h4 {
  color: #fff;
  font-size: 15px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.logo__mark {
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: linear-gradient(135deg, var(--accent), #ffb347);
  color: #fff;
  font-weight: 800;
  font-size: 14px;
  letter-spacing: 0.02em;
  display: grid;
  place-items: center;
}

.logo strong {
  color: #fff;
  font-size: 18px;
  letter-spacing: 0.06em;
}

.footer__desc {
  margin-bottom: 18px;
  line-height: 1.7;
}

.footer__contact li {
  margin-bottom: 8px;
}

.footer a:hover {
  color: var(--accent);
}

.footer__list li {
  margin-bottom: 10px;
}

.footer__cta {
  margin-top: 18px;
  padding: 12px 24px;
  font-size: 14px;
}

.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding: 22px 24px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.55);
}

@media (max-width: 960px) {
  .footer__top {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
}

@media (max-width: 600px) {
  .footer__top {
    grid-template-columns: 1fr;
    padding: 44px 18px 32px;
  }
  .footer__bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>
