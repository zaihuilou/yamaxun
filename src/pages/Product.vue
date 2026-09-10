<script setup>
import { ref, computed, watch, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { products, categories } from '../data/products'
import { site } from '../data/site'
import { t, tv } from '../i18n'

const route = useRoute()
const router = useRouter()

const activeCategory = ref(route.query.c || 'all')
const activeId = ref(route.query.p || '')

const filtered = computed(() =>
  activeCategory.value === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory.value)
)

const activeProduct = computed(() => products.find((p) => p.id === activeId.value) || null)

function setCategory(key) {
  activeCategory.value = key
  router.replace({ query: { ...route.query, c: key } })
}

function openProduct(id) {
  activeId.value = id
  document.body.style.overflow = 'hidden'
  router.replace({ query: { ...route.query, p: id } })
}

function closeProduct() {
  activeId.value = ''
  document.body.style.overflow = ''
  const q = { ...route.query }
  delete q.p
  router.replace({ query: q })
}

watch(
  () => route.query,
  (q) => {
    activeCategory.value = q.c || 'all'
    activeId.value = q.p || ''
    document.body.style.overflow = q.p ? 'hidden' : ''
  }
)

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <div>
    <!-- ============ PAGE HEAD ============ -->
    <section class="page-head">
      <div class="container">
        <nav class="crumbs">
          <RouterLink to="/">{{ t('common.home') }}</RouterLink> / <span>{{ t('nav.products') }}</span>
        </nav>
        <h1>{{ t('product.title') }}</h1>
        <p>{{ t('product.sub') }}</p>
      </div>
    </section>

    <!-- ============ FILTER + GRID ============ -->
    <section class="section">
      <div class="container">
        <div class="filters">
          <button
            v-for="c in categories"
            :key="c.key"
            class="filters__btn"
            :class="{ 'is-active': activeCategory === c.key }"
            @click="setCategory(c.key)"
          >
            {{ tv(c.label) }}
          </button>
          <span class="filters__count">{{ t('product.count', { n: filtered.length }) }}</span>
        </div>

        <div class="grid grid--3">
          <article
            v-for="p in filtered"
            :key="p.id"
            class="card product-card"
            @click="openProduct(p.id)"
          >
            <div class="product-card__media">
              <img :src="p.image" :alt="tv(p.name)" loading="lazy" />
              <span v-if="p.badge" class="tag product-card__badge">{{ tv(p.badge) }}</span>
            </div>
            <div class="product-card__body">
              <span class="product-card__model">{{ p.model }}</span>
              <h2>{{ tv(p.name) }}</h2>
              <p>{{ tv(p.short) }}</p>
              <ul class="product-card__meta">
                <li><strong>{{ t('product.modal.material') }}</strong> {{ tv(p.specs[0].v) }}</li>
                <li><strong>{{ t('product.modal.moq') }}</strong> {{ tv(p.moq) }}</li>
              </ul>
              <span class="product-card__link">{{ t('common.viewDetails') }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ============ OEM / SERVICE BAND ============ -->
    <section class="section section--soft">
      <div class="container oem">
        <div>
          <span class="eyebrow">{{ t('product.oem.eyebrow') }}</span>
          <h2>{{ t('product.oem.title') }}</h2>
          <p>{{ t('product.oem.text') }}</p>
          <ul class="check-list">
            <li>{{ t('product.oem.c1') }}</li>
            <li>{{ t('product.oem.c2') }}</li>
            <li>{{ t('product.oem.c3') }}</li>
            <li>{{ t('product.oem.c4') }}</li>
          </ul>
          <RouterLink to="/contact" class="btn btn--primary">{{ t('product.oem.cta') }}</RouterLink>
        </div>
        <div class="oem__facts">
          <div v-for="f in site.process.slice(0, 3)" :key="f.step" class="oem__fact">
            <span>{{ f.step }}</span>
            <div>
              <strong>{{ tv(f.title) }}</strong>
              <p>{{ tv(f.text) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ PRODUCT DETAIL MODAL ============ -->
    <Transition name="fade">
      <div v-if="activeProduct" class="modal" @click.self="closeProduct">
        <div class="modal__panel" role="dialog" aria-modal="true">
          <button class="modal__close" :aria-label="t('product.modal.close')" @click="closeProduct">
            ×
          </button>

          <div class="modal__grid">
            <div class="modal__media">
              <img :src="activeProduct.image" :alt="tv(activeProduct.name)" />
            </div>

            <div class="modal__body">
              <span class="product-card__model">{{ activeProduct.model }}</span>
              <h2>{{ tv(activeProduct.name) }}</h2>
              <p class="modal__desc">{{ tv(activeProduct.description) }}</p>

              <h4>{{ t('product.modal.features') }}</h4>
              <ul class="check-list">
                <li v-for="(f, i) in activeProduct.features" :key="i">{{ tv(f) }}</li>
              </ul>

              <h4>{{ t('product.modal.applications') }}</h4>
              <div class="chips">
                <span v-for="(a, i) in activeProduct.applications" :key="i" class="chip">
                  {{ tv(a) }}
                </span>
              </div>
            </div>
          </div>

          <div class="modal__specs">
            <h4>{{ t('product.modal.specs') }}</h4>
            <table>
              <tbody>
                <tr v-for="(s, i) in activeProduct.specs" :key="i">
                  <th>{{ tv(s.k) }}</th>
                  <td>{{ tv(s.v) }}</td>
                </tr>
                <tr>
                  <th>{{ t('product.modal.packaging') }}</th>
                  <td>{{ tv(activeProduct.packaging) }}</td>
                </tr>
                <tr>
                  <th>{{ t('product.modal.moq') }}</th>
                  <td>{{ tv(activeProduct.moq) }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="modal__footer">
            <span class="modal__note">{{ t('product.modal.note') }}</span>
            <div class="modal__actions">
              <button class="btn btn--outline" @click="closeProduct">
                {{ t('product.modal.back') }}
              </button>
              <RouterLink
                :to="`/contact?product=${activeProduct.id}`"
                class="btn btn--primary"
                @click="closeProduct"
              >
                {{ t('product.modal.inquire') }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* ---------- Page head ---------- */
.page-head {
  background: linear-gradient(120deg, var(--brand) 0%, var(--brand-2) 70%, var(--brand-3) 100%);
  color: rgba(255, 255, 255, 0.75);
  padding: 56px 0 64px;
}

.page-head h1 {
  color: #fff;
  font-size: clamp(28px, 4vw, 42px);
  margin: 10px 0 14px;
  max-width: 760px;
}

.page-head p {
  max-width: 720px;
}

.crumbs {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
}

.crumbs a:hover {
  color: var(--accent);
}

/* ---------- Filters ---------- */
.filters {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 34px;
}

.filters__btn {
  padding: 10px 20px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: #fff;
  font-size: 14px;
  font-weight: 600;
  color: var(--muted);
  transition: all 0.18s ease;
}

.filters__btn:hover {
  border-color: var(--brand);
  color: var(--brand);
}

.filters__btn.is-active {
  background: var(--brand);
  border-color: var(--brand);
  color: #fff;
}

.filters__count {
  margin-left: auto;
  font-size: 14px;
  color: var(--muted);
}

/* ---------- Product card ---------- */
.product-card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.product-card__media {
  position: relative;
  background: var(--bg-soft);
  aspect-ratio: 4 / 3;
  overflow: hidden;
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

.product-card__body h2 {
  font-size: 19px;
  margin: 8px 0 10px;
}

.product-card__body p {
  color: var(--muted);
  font-size: 15px;
  flex: 1;
}

.product-card__meta {
  margin-top: 14px;
  border-top: 1px dashed var(--line);
  padding-top: 14px;
  font-size: 13.5px;
  color: var(--muted);
}

.product-card__meta strong {
  color: var(--brand);
  margin-right: 6px;
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

/* ---------- OEM band ---------- */
.oem {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 48px;
  align-items: start;
}

.oem .eyebrow {
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 10px;
}

.oem h2 {
  font-size: clamp(24px, 3vw, 32px);
  margin-bottom: 14px;
}

.oem p {
  color: var(--muted);
  margin-bottom: 18px;
}

.oem .btn {
  margin-top: 14px;
}

.oem__fact {
  display: flex;
  gap: 18px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 20px 22px;
  margin-bottom: 16px;
}

.oem__fact span {
  font-size: 22px;
  font-weight: 800;
  color: var(--accent);
}

.oem__fact strong {
  display: block;
  color: var(--brand);
  margin-bottom: 4px;
}

.oem__fact p {
  color: var(--muted);
  font-size: 14.5px;
  margin: 0;
}

/* ---------- Modal ---------- */
.modal {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(11, 37, 69, 0.55);
  backdrop-filter: blur(3px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px 18px;
  overflow-y: auto;
}

.modal__panel {
  position: relative;
  width: 100%;
  max-width: 1000px;
  background: #fff;
  border-radius: 20px;
  box-shadow: var(--shadow-lg);
  padding: 34px 34px 30px;
  animation: pop 0.24s ease;
}

@keyframes pop {
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.99);
  }
}

.modal__close {
  position: absolute;
  top: 16px;
  right: 18px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--bg-soft);
  color: var(--brand);
  font-size: 24px;
  line-height: 1;
  display: grid;
  place-items: center;
}

.modal__close:hover {
  background: var(--accent);
  color: #fff;
}

.modal__grid {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 32px;
}

.modal__media {
  background: var(--bg-soft);
  border-radius: 14px;
  overflow: hidden;
  aspect-ratio: 1 / 1;
}

.modal__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal__body h2 {
  font-size: clamp(22px, 2.6vw, 28px);
  margin: 8px 0 14px;
}

.modal__desc {
  color: var(--muted);
  margin-bottom: 22px;
}

.modal__body h4,
.modal__specs h4 {
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--brand);
  margin: 0 0 12px;
}

.modal__body .check-list {
  margin-bottom: 22px;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  padding: 6px 14px;
  border-radius: 999px;
  background: var(--bg-soft);
  border: 1px solid var(--line);
  font-size: 13.5px;
  color: var(--muted);
}

.modal__specs {
  margin-top: 30px;
}

.modal__specs table {
  width: 100%;
  border-collapse: collapse;
  font-size: 15px;
}

.modal__specs th,
.modal__specs td {
  text-align: left;
  padding: 12px 14px;
  border-bottom: 1px solid var(--line);
  vertical-align: top;
}

.modal__specs th {
  width: 240px;
  color: var(--brand);
  font-weight: 600;
  background: var(--bg-soft);
}

.modal__specs td {
  color: var(--muted);
}

.modal__footer {
  margin-top: 28px;
  padding-top: 22px;
  border-top: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;
}

.modal__note {
  font-size: 14px;
  color: var(--muted);
}

.modal__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

@media (max-width: 860px) {
  .modal__grid {
    grid-template-columns: 1fr;
  }
  .oem {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .modal__panel {
    padding: 28px 20px 24px;
  }
  .modal__specs th {
    width: 150px;
  }
}

/* Small phones: the spec table becomes stacked label / value rows */
@media (max-width: 560px) {
  .modal {
    padding: 16px 12px;
  }

  .modal__panel {
    padding: 26px 16px 20px;
  }

  .modal__specs tr {
    display: block;
    border-bottom: 1px solid var(--line);
    padding: 10px 0;
  }

  .modal__specs tr:last-child {
    border-bottom: none;
  }

  .modal__specs th {
    display: block;
    width: auto;
    background: none;
    padding: 0;
    font-size: 13px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .modal__specs td {
    display: block;
    padding: 2px 0 0;
    border-bottom: none;
  }

  .modal__footer {
    gap: 14px;
  }

  .modal__actions {
    width: 100%;
  }

  .modal__actions .btn {
    flex: 1 1 100%;
  }

  .filters__count {
    margin-left: 0;
  }
}
</style>
