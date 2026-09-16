<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { site } from '../data/site'
import { products } from '../data/products'
import { t, tv } from '../i18n'

const route = useRoute()

const form = reactive({
  name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  product: '',
  quantity: '',
  message: '',
})

// Local errors hold an i18n key; server errors hold plain text from Formcarry
const errors = reactive({})
const serverErrors = ref({})
const errorKey = ref('')
const submitting = ref(false)
const sent = ref(false)
const demoMode = ref(false)

onMounted(() => {
  if (route.query.product) form.product = route.query.product
  demoMode.value = !site.formEndpoint
})

function validate() {
  errors.name = form.name.trim() ? '' : 'err.name'
  errors.email = /^\S+@\S+\.\S+$/.test(form.email) ? '' : 'err.email'
  errors.message = form.message.trim() ? '' : 'err.message'
  return !errors.name && !errors.email && !errors.message
}

// Merge local (translated) + Formcarry (raw) errors for a given field
function errText(field) {
  if (serverErrors.value[field]) return serverErrors.value[field]
  const key = errors[field]
  return key ? t(key) : ''
}

function clearError(field) {
  errors[field] = ''
  if (serverErrors.value[field]) delete serverErrors.value[field]
}

async function submit() {
  errorKey.value = ''
  serverErrors.value = {}

  if (!validate()) return

  submitting.value = true

  // Demo mode (no Formcarry endpoint configured): only simulate the result locally
  if (!site.formEndpoint) {
    await new Promise((r) => setTimeout(r, 600))
    submitting.value = false
    sent.value = true
    return
  }

  try {
    const response = await fetch(site.formEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ ...form }),
    })

    const data = await response.json()

    if (response.ok && data.code === 200) {
      sent.value = true
    } else if (data.code === 422) {
      const raw = data.errors || {}
      serverErrors.value = Object.fromEntries(
        Object.entries(raw).map(([field, value]) => [
          field,
          (value && value.message) || String(value),
        ])
      )
      errorKey.value = 'err.checkFields'
    } else {
      // Formcarry may send its own message; fall back to a translated generic one
      errorKey.value = 'err.generic'
      if (data.message) {
        serverErrors.value = { _form: data.message }
        errorKey.value = ''
      }
    }
  } catch (e) {
    errorKey.value = 'err.network'
  } finally {
    submitting.value = false
  }
}

function reset() {
  Object.assign(form, {
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  })
  serverErrors.value = {}
  errorKey.value = ''
  sent.value = false
}

const contactCards = computed(() => [
  { icon: '📧', label: t('contact.email'), value: site.email, link: `mailto:${site.email}` },
  {
    icon: '📞',
    label: t('contact.phone'),
    value: site.phone,
    link: `tel:${site.phone.replace(/\s/g, '')}`,
  },
  {
    icon: '💬',
    label: t('contact.wechat'),
    value: site.wechat,
    link: '',
  },
])

const tradeTerms = [
  { labelKey: 'contact.trade.moq', valueKey: 'contact.trade.v.moq' },
  { labelKey: 'contact.trade.incoterms', valueKey: 'contact.trade.v.incoterms' },
  { labelKey: 'contact.trade.port', valueKey: 'contact.trade.v.port' },
  { labelKey: 'contact.trade.lead', valueKey: 'contact.trade.v.lead' },
]
</script>

<template>
  <div>
    <!-- ============ PAGE HEAD ============ -->
    <section class="page-head">
      <div class="container">
        <nav class="crumbs">
          <RouterLink to="/">{{ t('common.home') }}</RouterLink> / <span>{{ t('nav.contact') }}</span>
        </nav>
        <h1>{{ t('contact.title') }}</h1>
        <p>{{ t('contact.sub') }}</p>
      </div>
    </section>

    <!-- ============ CONTACT CARDS ============ -->
    <section class="section">
      <div class="container grid grid--3">
        <a
          v-for="c in contactCards"
          :key="c.label"
          class="card c-card"
          :href="c.link || undefined"
          :target="c.link && c.link.startsWith('http') ? '_blank' : undefined"
        >
          <span class="c-card__icon">{{ c.icon }}</span>
          <strong>{{ c.label }}</strong>
          <span class="c-card__value">{{ c.value }}</span>
        </a>
      </div>
    </section>

    <!-- ============ FORM + INFO ============ -->
    <section class="section section--soft">
      <div class="container contact">
        <div class="card form-card">
          <h2>{{ t('contact.formTitle') }}</h2>
          <p class="form-card__sub">
            {{ t('contact.formSub') }}
          </p>

          <div v-if="demoMode" class="notice notice--warn">
            <strong>{{ t('contact.demoTitle') }}</strong> {{ t('contact.demoText') }}
            <code>src/data/site.js</code> → <code>formEndpoint</code>.
          </div>

          <form v-if="!sent" @submit.prevent="submit" novalidate>
            <div class="field-row">
              <label class="field">
                <span>{{ t('contact.field.name') }} <em>*</em></span>
                <input
                  v-model="form.name"
                  type="text"
                  name="name"
                  :placeholder="t('contact.ph.name')"
                  @input="clearError('name')"
                />
                <small v-if="errText('name')" class="err">{{ errText('name') }}</small>
              </label>
              <label class="field">
                <span>{{ t('contact.field.email') }} <em>*</em></span>
                <input
                  v-model="form.email"
                  type="email"
                  name="email"
                  :placeholder="t('contact.ph.email')"
                  @input="clearError('email')"
                />
                <small v-if="errText('email')" class="err">{{ errText('email') }}</small>
              </label>
            </div>

            <div class="field-row">
              <label class="field">
                <span>{{ t('contact.field.company') }}</span>
                <input
                  v-model="form.company"
                  type="text"
                  name="company"
                  :placeholder="t('contact.ph.company')"
                />
              </label>
              <label class="field">
                <span>{{ t('contact.field.country') }}</span>
                <input
                  v-model="form.country"
                  type="text"
                  name="country"
                  :placeholder="t('contact.ph.country')"
                />
              </label>
            </div>

            <div class="field-row">
              <label class="field">
                <span>{{ t('contact.field.phone') }}</span>
                <input
                  v-model="form.phone"
                  type="text"
                  name="phone"
                  :placeholder="t('contact.ph.phone')"
                />
              </label>
              <label class="field">
                <span>{{ t('contact.field.quantity') }}</span>
                <input
                  v-model="form.quantity"
                  type="text"
                  name="quantity"
                  :placeholder="t('contact.ph.quantity')"
                />
              </label>
            </div>

            <label class="field">
              <span>{{ t('contact.field.product') }}</span>
              <select v-model="form.product" name="product">
                <option value="">{{ t('contact.field.productDefault') }}</option>
                <option v-for="p in products" :key="p.id" :value="p.id">
                  {{ p.model }} — {{ tv(p.name) }}
                </option>
              </select>
            </label>

            <label class="field">
              <span>{{ t('contact.field.message') }} <em>*</em></span>
              <textarea
                v-model="form.message"
                name="message"
                rows="5"
                :placeholder="t('contact.ph.message')"
                @input="clearError('message')"
              ></textarea>
              <small v-if="errText('message')" class="err">{{ errText('message') }}</small>
            </label>

            <p v-if="serverErrors._form" class="err err--block">{{ serverErrors._form }}</p>
            <p v-else-if="errorKey" class="err err--block">
              {{ t(errorKey, { email: site.email }) }}
            </p>

            <button class="btn btn--primary btn--block" type="submit" :disabled="submitting">
              {{ submitting ? t('contact.sending') : t('contact.submit') }}
            </button>
          </form>

          <div v-else class="success">
            <div class="success__icon">✓</div>
            <h3>{{ t('contact.successTitle') }}</h3>
            <p>{{ t('contact.successText') }}</p>
            <button class="btn btn--outline" @click="reset">{{ t('contact.again') }}</button>
          </div>
        </div>

        <aside class="contact__side">
          <div class="card info">
            <h3>{{ t('contact.trade') }}</h3>
            <ul class="info__list">
              <li v-for="term in tradeTerms" :key="term.labelKey">
                <span>{{ t(term.labelKey) }}</span>{{ t(term.valueKey) }}
              </li>
            </ul>
          </div>

          <div class="card info info--dark">
            <h3>{{ t('contact.chatTitle') }}</h3>
            <p>{{ t('contact.chatText') }}</p>
            <div class="btn btn--primary btn--block">{{ site.wechat }}</div>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-head {
  background: linear-gradient(120deg, var(--brand) 0%, var(--brand-2) 70%, var(--brand-3) 100%);
  color: rgba(255, 255, 255, 0.75);
  padding: 56px 0 64px;
}

.page-head h1 {
  color: #fff;
  font-size: clamp(28px, 4vw, 42px);
  margin: 10px 0 14px;
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

/* ---------- Contact cards ---------- */
.c-card {
  padding: 26px 24px;
  text-align: center;
  display: block;
}

.c-card__icon {
  display: block;
  font-size: 26px;
  margin-bottom: 12px;
}

.c-card strong {
  display: block;
  color: var(--brand);
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 6px;
}

.c-card__value {
  font-size: 15.5px;
  color: var(--muted);
  word-break: break-word;
}

.c-card:hover .c-card__value {
  color: var(--accent);
}

/* ---------- Layout ---------- */
.contact {
  display: grid;
  grid-template-columns: 1.35fr 0.65fr;
  gap: 30px;
  align-items: start;
}

.form-card {
  padding: 36px 34px;
}

.form-card h2 {
  font-size: 26px;
  margin-bottom: 8px;
}

.form-card__sub {
  color: var(--muted);
  font-size: 15px;
  margin-bottom: 24px;
}

/* ---------- Notice ---------- */
.notice {
  border-radius: var(--radius-sm);
  padding: 14px 16px;
  font-size: 14px;
  margin-bottom: 22px;
}

.notice code {
  background: rgba(0, 0, 0, 0.06);
  padding: 1px 6px;
  border-radius: 4px;
  font-size: 13px;
}

.notice--warn {
  background: #fff8e6;
  border: 1px solid #ffe2a8;
  color: #7a5300;
}

/* ---------- Fields ---------- */
.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.field {
  display: block;
  margin-bottom: 16px;
}

.field > span {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--brand);
  margin-bottom: 7px;
}

.field > span em {
  color: var(--accent);
  font-style: normal;
}

.field input,
.field select,
.field textarea {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  background: #fff;
  font-size: 15px;
  transition: border-color 0.18s ease, box-shadow 0.18s ease;
}

.field textarea {
  resize: vertical;
  min-height: 110px;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(255, 122, 24, 0.15);
}

.err {
  display: block;
  color: #d92d20;
  font-size: 13px;
  margin-top: 6px;
}

.err--block {
  margin-bottom: 14px;
}

.form-card .btn--block {
  margin-top: 10px;
}

.form-card .btn:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

/* ---------- Success ---------- */
.success {
  text-align: center;
  padding: 26px 10px 10px;
}

.success__icon {
  width: 68px;
  height: 68px;
  margin: 0 auto 18px;
  border-radius: 50%;
  background: #e7f8ee;
  color: #12a150;
  font-size: 32px;
  display: grid;
  place-items: center;
}

.success h3 {
  font-size: 21px;
  margin-bottom: 8px;
}

.success p {
  color: var(--muted);
  margin-bottom: 22px;
}

/* ---------- Side ---------- */
.contact__side {
  display: grid;
  gap: 18px;
}

.info {
  padding: 26px 24px;
}

.info h3 {
  font-size: 17px;
  margin-bottom: 12px;
}

.info p {
  color: var(--muted);
  font-size: 15px;
}

.info__list li {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  padding: 10px 0;
  border-bottom: 1px dashed var(--line);
  font-size: 14.5px;
  color: var(--ink);
}

.info__list li:last-child {
  border-bottom: none;
}

.info__list span {
  color: var(--muted);
  flex-shrink: 0;
}

.info--dark {
  background: var(--brand);
  border-color: var(--brand);
}

.info--dark h3 {
  color: #fff;
}

.info--dark p {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 18px;
}

@media (max-width: 960px) {
  .contact {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .field-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .form-card {
    padding: 26px 20px;
  }
  /* 16px stops iOS Safari from zooming in when a field is focused */
  .field input,
  .field select,
  .field textarea {
    font-size: 16px;
  }
  .c-card {
    padding: 22px 18px;
  }
}
</style>
