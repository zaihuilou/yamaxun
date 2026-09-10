<script setup>
import { ref } from 'vue'
import { site } from '../data/site'
import { t, tv } from '../i18n'

const openFaq = ref(0)

const qcItems = [
  { titleKey: 'about.qc.t1', descKey: 'about.qc.d1' },
  { titleKey: 'about.qc.t2', descKey: 'about.qc.d2' },
  { titleKey: 'about.qc.t3', descKey: 'about.qc.d3' },
  { titleKey: 'about.qc.t4', descKey: 'about.qc.d4' },
  { titleKey: 'about.qc.t5', descKey: 'about.qc.d5' },
]

const introCards = [
  { value: '2008', labelKey: 'about.stat1' },
  { value: '12,000 m²', labelKey: 'about.stat2' },
  { value: '3,800 T', labelKey: 'about.stat3' },
]
</script>

<template>
  <div>
    <!-- ============ PAGE HEAD ============ -->
    <section class="page-head">
      <div class="container">
        <nav class="crumbs">
          <RouterLink to="/">{{ t('common.home') }}</RouterLink> / <span>{{ t('nav.about') }}</span>
        </nav>
        <h1>{{ t('about.title', { legal: tv(site.legalName) }) }}</h1>
        <p>{{ t('about.sub') }}</p>
      </div>
    </section>

    <!-- ============ INTRO ============ -->
    <section class="section">
      <div class="container intro">
        <div class="intro__copy">
          <span class="eyebrow">{{ t('about.who') }}</span>
          <h2>{{ t('about.introTitle') }}</h2>
          <p>{{ t('about.introP1', { legal: tv(site.legalName) }) }}</p>
          <p>{{ t('about.introP2') }}</p>
          <div class="intro__cards">
            <div v-for="c in introCards" :key="c.labelKey" class="intro__card">
              <strong>{{ c.value }}</strong>
              <span>{{ t(c.labelKey) }}</span>
            </div>
          </div>
        </div>
        <div class="intro__media">
          <img src="/images/factory.png" :alt="tv(site.legalName)" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- ============ MISSION ============ -->
    <section class="section section--soft">
      <div class="container grid grid--2">
        <div class="card mission">
          <h3>{{ t('about.mission') }}</h3>
          <p>{{ t('about.missionText') }}</p>
        </div>
        <div class="card mission">
          <h3>{{ t('about.vision') }}</h3>
          <p>{{ t('about.visionText') }}</p>
        </div>
      </div>
    </section>

    <!-- ============ MILESTONES ============ -->
    <section class="section">
      <div class="container">
        <div class="heading">
          <span class="eyebrow">{{ t('about.milestonesEyebrow') }}</span>
          <h2>{{ t('about.milestonesTitle') }}</h2>
        </div>
        <ol class="timeline">
          <li v-for="m in site.milestones" :key="m.year" class="timeline__item">
            <div class="timeline__year">{{ m.year }}</div>
            <div class="timeline__body">
              <h3>{{ tv(m.title) }}</h3>
              <p>{{ tv(m.text) }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- ============ CERTIFICATES ============ -->
    <section class="section section--soft">
      <div class="container">
        <div class="heading">
          <span class="eyebrow">{{ t('about.certEyebrow') }}</span>
          <h2>{{ t('about.certTitle') }}</h2>
          <p>{{ t('about.certSub') }}</p>
        </div>
        <div class="grid grid--3">
          <div v-for="c in site.certificates" :key="c.code" class="card cert">
            <div class="cert__badge">✓</div>
            <strong>{{ c.code }}</strong>
            <span>{{ tv(c.title) }}</span>
          </div>
        </div>

        <div class="qc">
          <div v-for="(item, i) in qcItems" :key="item.titleKey" class="qc__item">
            <span class="qc__num">{{ String(i + 1).padStart(2, '0') }}</span>
            <div>
              <strong>{{ t(item.titleKey) }}</strong>
              <p>{{ t(item.descKey) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ FAQ ============ -->
    <section class="section">
      <div class="container faq-wrap">
        <div class="heading heading--left">
          <span class="eyebrow">{{ t('about.faqEyebrow') }}</span>
          <h2>{{ t('about.faqTitle') }}</h2>
          <p>{{ t('about.faqSub') }}</p>
        </div>
        <div class="faq">
          <div
            v-for="(f, i) in site.faqs"
            :key="i"
            class="faq__item"
            :class="{ 'is-open': openFaq === i }"
          >
            <button class="faq__q" @click="openFaq = openFaq === i ? -1 : i">
              <span>{{ tv(f.q) }}</span>
              <i>{{ openFaq === i ? '−' : '+' }}</i>
            </button>
            <div v-show="openFaq === i" class="faq__a">{{ tv(f.a) }}</div>
          </div>
        </div>
        <RouterLink to="/contact" class="btn btn--primary">{{ t('about.faqCta') }}</RouterLink>
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

/* ---------- Intro ---------- */
.intro {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 52px;
  align-items: center;
}

.intro__copy .eyebrow {
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 10px;
}

.intro__copy h2 {
  font-size: clamp(26px, 3.2vw, 34px);
  margin-bottom: 18px;
}

.intro__copy p {
  color: var(--muted);
  margin-bottom: 14px;
}

.intro__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 26px;
}

.intro__card {
  background: var(--bg-soft);
  border-radius: var(--radius-sm);
  padding: 18px;
  text-align: center;
}

.intro__card strong {
  display: block;
  color: var(--brand);
  font-size: 22px;
}

.intro__card span {
  font-size: 13px;
  color: var(--muted);
}

.intro__media img {
  border-radius: 20px;
  box-shadow: var(--shadow);
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

/* ---------- Mission ---------- */
.mission {
  padding: 34px 32px;
}

.mission h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.mission p {
  color: var(--muted);
}

/* ---------- Timeline ---------- */
.timeline {
  position: relative;
  max-width: 860px;
  margin: 0 auto;
  padding-left: 26px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 74px;
  top: 6px;
  bottom: 6px;
  width: 2px;
  background: var(--line);
}

.timeline__item {
  position: relative;
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 28px;
  padding-bottom: 30px;
}

.timeline__year {
  text-align: right;
  font-weight: 800;
  color: var(--accent);
  font-size: 17px;
  padding-top: 2px;
}

.timeline__body {
  position: relative;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 20px 24px;
  box-shadow: var(--shadow-sm);
}

.timeline__body::before {
  content: '';
  position: absolute;
  left: -31px;
  top: 26px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fff;
  border: 3px solid var(--accent);
}

.timeline__body h3 {
  font-size: 18px;
  margin-bottom: 6px;
}

.timeline__body p {
  color: var(--muted);
  font-size: 15px;
}

/* ---------- Certificates ---------- */
.cert {
  padding: 26px 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.cert__badge {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--accent-soft);
  color: var(--accent);
  display: grid;
  place-items: center;
  font-weight: 800;
  margin-bottom: 10px;
}

.cert strong {
  color: var(--brand);
  font-size: 16px;
}

.cert span {
  color: var(--muted);
  font-size: 14px;
}

.qc {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

.qc__item {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 20px;
}

.qc__num {
  display: inline-block;
  font-size: 13px;
  font-weight: 800;
  color: var(--accent);
  margin-bottom: 8px;
}

.qc__item strong {
  display: block;
  color: var(--brand);
  font-size: 15px;
  margin-bottom: 6px;
}

.qc__item p {
  color: var(--muted);
  font-size: 14px;
}

/* ---------- FAQ ---------- */
.faq-wrap {
  max-width: 860px;
}

.faq__item {
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  margin-bottom: 12px;
  background: #fff;
  overflow: hidden;
}

.faq__item.is-open {
  border-color: var(--brand);
}

.faq__q {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 22px;
  text-align: left;
  font-weight: 600;
  color: var(--brand);
}

.faq__q i {
  font-style: normal;
  font-size: 22px;
  color: var(--accent);
  line-height: 1;
}

.faq__a {
  padding: 0 22px 20px;
  color: var(--muted);
  font-size: 15px;
}

.faq-wrap .btn {
  margin-top: 22px;
}

@media (max-width: 960px) {
  .intro {
    grid-template-columns: 1fr;
    gap: 34px;
  }
  .qc {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .intro__cards {
    grid-template-columns: 1fr;
  }
  .timeline {
    padding-left: 0;
  }
  .timeline::before {
    left: 6px;
  }
  .timeline__item {
    grid-template-columns: 1fr;
    gap: 10px;
    padding-left: 30px;
  }
  .timeline__year {
    text-align: left;
  }
  .timeline__body::before {
    left: -30px;
  }
  .qc {
    grid-template-columns: 1fr;
  }
}
</style>
