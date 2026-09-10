<script setup>
import { site } from '../data/site'
import { products } from '../data/products'
import { t, tv } from '../i18n'

const featured = products.slice(0, 3)
</script>

<template>
  <div class="home">
    <!-- ============ HERO ============ -->
    <section class="hero">
      <div class="container hero__inner">
        <div class="hero__copy">
          <span class="tag">{{ t('home.hero.tag') }}</span>
          <h1>{{ t('home.hero.title') }}</h1>
          <p class="hero__lead">{{ t('home.hero.lead') }}</p>
          <div class="hero__actions">
            <RouterLink to="/products" class="btn btn--primary">
              {{ t('home.hero.ctaProducts') }}
            </RouterLink>
            <RouterLink to="/contact" class="btn btn--outline">
              {{ t('home.hero.ctaQuote') }}
            </RouterLink>
          </div>
          <ul class="hero__points">
            <li>{{ t('home.hero.p1') }}</li>
            <li>{{ t('home.hero.p2') }}</li>
            <li>{{ t('home.hero.p3') }}</li>
          </ul>
        </div>
        <div class="hero__media">
          <img src="/images/hero.png" :alt="t('home.hero.title')" />
        </div>
      </div>
    </section>

    <!-- ============ STATS ============ -->
    <section class="stats">
      <div class="container stats__inner">
        <div v-for="s in site.stats" :key="s.value" class="stats__item">
          <strong>{{ s.value }}<span>{{ s.suffix }}</span></strong>
          <span>{{ tv(s.label) }}</span>
        </div>
      </div>
    </section>

    <!-- ============ FEATURED PRODUCTS ============ -->
    <section class="section">
      <div class="container">
        <div class="heading">
          <span class="eyebrow">{{ t('home.products.eyebrow') }}</span>
          <h2>{{ t('home.products.title') }}</h2>
          <p>{{ t('home.products.sub') }}</p>
        </div>

        <div class="grid grid--3">
          <RouterLink
            v-for="p in featured"
            :key="p.id"
            :to="`/products?p=${p.id}`"
            class="card product-card"
          >
            <div class="product-card__media">
              <img :src="p.image" :alt="tv(p.name)" loading="lazy" />
              <span v-if="p.badge" class="tag product-card__badge">{{ tv(p.badge) }}</span>
            </div>
            <div class="product-card__body">
              <span class="product-card__model">{{ p.model }}</span>
              <h3>{{ tv(p.name) }}</h3>
              <p>{{ tv(p.short) }}</p>
              <span class="product-card__link">{{ t('common.viewDetails') }}</span>
            </div>
          </RouterLink>
        </div>

        <div class="center">
          <RouterLink to="/products" class="btn btn--outline">
            {{ t('home.products.seeAll') }}
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ============ WHY CHOOSE US ============ -->
    <section class="section section--soft">
      <div class="container">
        <div class="heading">
          <span class="eyebrow">{{ t('home.why.eyebrow') }}</span>
          <h2>{{ t('home.why.title') }}</h2>
          <p>{{ t('home.why.sub') }}</p>
        </div>

        <div class="grid grid--3">
          <div v-for="a in site.advantages" :key="a.icon" class="card advantage">
            <div class="advantage__icon">{{ a.icon }}</div>
            <h3>{{ tv(a.title) }}</h3>
            <p>{{ tv(a.text) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ FACTORY STRIP ============ -->
    <section class="section">
      <div class="container about-strip">
        <div class="about-strip__media">
          <img src="/images/factory.png" :alt="tv(site.legalName)" loading="lazy" />
        </div>
        <div class="about-strip__copy">
          <span class="eyebrow">{{ t('home.factory.eyebrow') }}</span>
          <h2>{{ t('home.factory.title') }}</h2>
          <p>{{ t('home.factory.text', { legal: tv(site.legalName) }) }}</p>
          <ul class="check-list">
            <li>{{ t('home.factory.c1') }}</li>
            <li>{{ t('home.factory.c2') }}</li>
            <li>{{ t('home.factory.c3') }}</li>
          </ul>
          <RouterLink to="/about" class="btn btn--primary">{{ t('home.factory.cta') }}</RouterLink>
        </div>
      </div>
    </section>

    <!-- ============ INDUSTRIES ============ -->
    <section class="section section--soft">
      <div class="container">
        <div class="heading">
          <span class="eyebrow">{{ t('home.industries.eyebrow') }}</span>
          <h2>{{ t('home.industries.title') }}</h2>
          <p>{{ t('home.industries.sub') }}</p>
        </div>
        <div class="industries">
          <div v-for="i in site.industries" :key="i.icon" class="industry">
            <span class="industry__icon">{{ i.icon }}</span>
            <span>{{ tv(i.name) }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ PROCESS ============ -->
    <section class="section">
      <div class="container">
        <div class="heading">
          <span class="eyebrow">{{ t('home.process.eyebrow') }}</span>
          <h2>{{ t('home.process.title') }}</h2>
        </div>
        <div class="process">
          <div v-for="(p, idx) in site.process" :key="p.step" class="process__item">
            <div class="process__num">{{ p.step }}</div>
            <h3>{{ tv(p.title) }}</h3>
            <p>{{ tv(p.text) }}</p>
            <span v-if="idx < site.process.length - 1" class="process__arrow">→</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ TESTIMONIALS ============ -->
    <section class="section section--soft">
      <div class="container">
        <div class="heading">
          <span class="eyebrow">{{ t('home.testimonials.eyebrow') }}</span>
          <h2>{{ t('home.testimonials.title') }}</h2>
        </div>
        <div class="grid grid--3">
          <figure v-for="item in site.testimonials" :key="item.name" class="card quote">
            <div class="quote__stars">★★★★★</div>
            <blockquote>“{{ tv(item.quote) }}”</blockquote>
            <figcaption>
              <strong>{{ item.name }}</strong>
              <span>{{ tv(item.role) }}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- ============ CTA ============ -->
    <section class="section--dark cta">
      <div class="container cta__inner">
        <div>
          <h2>{{ t('home.cta.title') }}</h2>
          <p>{{ t('home.cta.sub') }}</p>
        </div>
        <RouterLink to="/contact" class="btn btn--primary">{{ t('home.cta.btn') }}</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ---------- Hero ---------- */
.hero {
  background: linear-gradient(180deg, #f5f7fa 0%, #ffffff 100%);
  padding: 72px 0 96px;
  overflow: hidden;
}

.hero__inner {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 56px;
  align-items: center;
}

.hero__copy h1 {
  font-size: clamp(32px, 4.6vw, 52px);
  margin: 18px 0 20px;
}

.hero__lead {
  font-size: 18px;
  color: var(--muted);
  max-width: 560px;
}

.hero__actions {
  display: flex;
  gap: 14px;
  margin: 30px 0 26px;
  flex-wrap: wrap;
}

.hero__points {
  display: flex;
  gap: 26px;
  flex-wrap: wrap;
  font-size: 14px;
  font-weight: 600;
  color: var(--brand);
}

.hero__points li::before {
  content: '✓';
  color: var(--accent);
  margin-right: 7px;
  font-weight: 800;
}

.hero__media img {
  border-radius: 24px;
  box-shadow: var(--shadow-lg);
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

/* ---------- Stats ---------- */
.stats {
  background: var(--brand);
  color: #fff;
}

.stats__inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 40px 24px;
  gap: 24px;
  text-align: center;
}

.stats__item strong {
  display: block;
  font-size: 38px;
  font-weight: 800;
  line-height: 1.1;
  color: #fff;
}

.stats__item strong span {
  color: var(--accent);
}

.stats__item > span {
  display: block;
  margin-top: 6px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.66);
}

/* ---------- Product card ---------- */
.product-card {
  display: flex;
  flex-direction: column;
}

.product-card__media {
  position: relative;
  background: var(--bg-soft);
  aspect-ratio: 4 / 3;
}

.product-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.product-card:hover .product-card__media img {
  transform: scale(1.06);
}

.product-card__badge {
  position: absolute;
  top: 14px;
  left: 14px;
  background: #fff;
}

.product-card__body {
  padding: 22px 24px 26px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-card__model {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--accent);
  text-transform: uppercase;
}

.product-card__body h3 {
  font-size: 19px;
  margin: 8px 0 10px;
}

.product-card__body p {
  color: var(--muted);
  font-size: 15px;
  flex: 1;
}

.product-card__link {
  margin-top: 16px;
  font-weight: 700;
  font-size: 14px;
  color: var(--brand-3);
}

.product-card:hover .product-card__link {
  color: var(--accent);
}

.center {
  text-align: center;
  margin-top: 44px;
}

/* ---------- Advantage ---------- */
.advantage {
  padding: 30px 26px;
}

.advantage__icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: var(--accent-soft);
  display: grid;
  place-items: center;
  font-size: 24px;
  margin-bottom: 18px;
}

.advantage h3 {
  font-size: 18px;
  margin-bottom: 8px;
}

.advantage p {
  color: var(--muted);
  font-size: 15px;
}

/* ---------- About strip ---------- */
.about-strip {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 52px;
  align-items: center;
}

.about-strip__media img {
  border-radius: 20px;
  box-shadow: var(--shadow);
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.about-strip__copy .eyebrow {
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 10px;
}

.about-strip__copy h2 {
  font-size: clamp(26px, 3.2vw, 34px);
  margin-bottom: 16px;
}

.about-strip__copy p {
  color: var(--muted);
  margin-bottom: 18px;
}

.about-strip__copy .btn {
  margin-top: 14px;
}

/* ---------- Industries ---------- */
.industries {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.industry {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  padding: 22px 18px;
  text-align: center;
  font-weight: 600;
  font-size: 15px;
  color: var(--brand);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.industry:hover {
  transform: translateY(-3px);
  border-color: var(--accent);
}

.industry__icon {
  display: block;
  font-size: 26px;
  margin-bottom: 10px;
}

/* ---------- Process ---------- */
.process {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 26px 18px;
  position: relative;
}

.process__item {
  position: relative;
  text-align: center;
  padding: 0 10px;
}

.process__num {
  width: 54px;
  height: 54px;
  margin: 0 auto 16px;
  border-radius: 50%;
  background: var(--brand);
  color: #fff;
  font-weight: 800;
  font-size: 18px;
  display: grid;
  place-items: center;
}

.process__item h3 {
  font-size: 17px;
  margin-bottom: 6px;
}

.process__item p {
  color: var(--muted);
  font-size: 14px;
}

.process__arrow {
  position: absolute;
  right: -14px;
  top: 20px;
  color: var(--accent);
  font-size: 20px;
  font-weight: 700;
}

/* ---------- Testimonials ---------- */
.quote {
  padding: 30px 28px;
  display: flex;
  flex-direction: column;
}

.quote__stars {
  color: #ffb100;
  letter-spacing: 3px;
  margin-bottom: 14px;
}

.quote blockquote {
  margin: 0 0 20px;
  color: var(--ink);
  font-size: 15.5px;
  line-height: 1.7;
  flex: 1;
}

.quote figcaption strong {
  display: block;
  color: var(--brand);
  font-size: 15px;
}

.quote figcaption span {
  display: block;
  color: var(--muted);
  font-size: 13px;
}

/* ---------- CTA ---------- */
.cta {
  padding: 64px 0;
  background: linear-gradient(120deg, var(--brand) 0%, var(--brand-2) 60%, var(--brand-3) 100%);
}

.cta__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  flex-wrap: wrap;
}

.cta h2 {
  color: #fff;
  font-size: clamp(24px, 3vw, 32px);
  margin-bottom: 8px;
}

.cta p {
  color: rgba(255, 255, 255, 0.72);
}

/* ---------- Responsive ---------- */
@media (max-width: 960px) {
  .hero__inner,
  .about-strip {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .hero {
    padding: 44px 0 64px;
  }
  .hero__media {
    order: -1;
  }
  .stats__inner {
    grid-template-columns: repeat(2, 1fr);
  }
  .industries {
    grid-template-columns: repeat(2, 1fr);
  }
  .process__arrow {
    display: none;
  }
}

@media (max-width: 560px) {
  .stats__inner {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .hero__points {
    gap: 12px;
    flex-direction: column;
  }
}
</style>
