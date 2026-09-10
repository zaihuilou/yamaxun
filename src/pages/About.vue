<script setup>
import { ref } from 'vue'
import { site } from '../data/site'

const openFaq = ref(0)
</script>

<template>
  <div>
    <!-- ============ PAGE HEAD ============ -->
    <section class="page-head">
      <div class="container">
        <nav class="crumbs"><RouterLink to="/">Home</RouterLink> / <span>About</span></nav>
        <h1>About {{ site.legalName }}</h1>
        <p>
          A dedicated cable tie manufacturer in Ningbo, China — from raw material to finished
          carton, everything is done in our own factory.
        </p>
      </div>
    </section>

    <!-- ============ INTRO ============ -->
    <section class="section">
      <div class="container intro">
        <div class="intro__copy">
          <span class="eyebrow">Who we are</span>
          <h2>18 Years Focused on One Product: Cable Ties</h2>
          <p>
            Founded in 2008, {{ site.legalName }} has grown from a small workshop with 6 injection
            machines into a 12,000 m² modern factory with 46 automated production lines. We do one
            thing only — manufacturing nylon cable ties and stainless steel ties — and we do it
            seriously.
          </p>
          <p>
            Today we export to more than 60 countries and regions, supplying electrical
            wholesalers, solar installers, automotive harness makers and retail brands. Our
            customers stay with us because the quality of every shipment is identical to the
            approved sample.
          </p>
          <div class="intro__cards">
            <div class="intro__card">
              <strong>2008</strong>
              <span>Year established</span>
            </div>
            <div class="intro__card">
              <strong>12,000 m²</strong>
              <span>Factory area</span>
            </div>
            <div class="intro__card">
              <strong>3,800 T</strong>
              <span>Annual output</span>
            </div>
          </div>
        </div>
        <div class="intro__media">
          <img src="/images/factory.png" alt="Cable tie production workshop" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- ============ MISSION ============ -->
    <section class="section section--soft">
      <div class="container grid grid--2">
        <div class="card mission">
          <h3>Our Mission</h3>
          <p>
            To make cable fixing safer and cheaper for our partners by providing stable quality,
            honest pricing and fast response — so our distributors can focus on growing their own
            market.
          </p>
        </div>
        <div class="card mission">
          <h3>Our Vision</h3>
          <p>
            To become the most trusted cable tie supplier for small and medium distributors
            worldwide, known for reliability rather than for the lowest price.
          </p>
        </div>
      </div>
    </section>

    <!-- ============ MILESTONES ============ -->
    <section class="section">
      <div class="container">
        <div class="heading">
          <span class="eyebrow">Milestones</span>
          <h2>How We Grew</h2>
        </div>
        <ol class="timeline">
          <li v-for="m in site.milestones" :key="m.year" class="timeline__item">
            <div class="timeline__year">{{ m.year }}</div>
            <div class="timeline__body">
              <h3>{{ m.title }}</h3>
              <p>{{ m.text }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- ============ CERTIFICATES ============ -->
    <section class="section section--soft">
      <div class="container">
        <div class="heading">
          <span class="eyebrow">Quality control</span>
          <h2>Certifications &amp; Testing</h2>
          <p>Every batch is tested in our own laboratory. Third party reports are available on request.</p>
        </div>
        <div class="grid grid--3">
          <div v-for="c in site.certificates" :key="c.code" class="card cert">
            <div class="cert__badge">✓</div>
            <strong>{{ c.code }}</strong>
            <span>{{ c.title }}</span>
          </div>
        </div>

        <div class="qc">
          <div class="qc__item" v-for="(t, i) in [
            { t: 'Raw material inspection', d: 'PA66 granules tested for melt flow index and moisture before molding.' },
            { t: 'In-process inspection', d: 'Dimensions and head locking checked every 30 minutes on each machine.' },
            { t: 'Tensile test', d: 'Loop tensile strength tested on 20 samples per batch with a digital force gauge.' },
            { t: 'Aging & UV test', d: 'Heat aging at 120°C and xenon-arc weathering for outdoor grade products.' },
            { t: 'Final inspection', d: 'AQL 2.5 sampling on appearance, packing quantity and carton marking.' },
          ]" :key="i">
            <span class="qc__num">{{ String(i + 1).padStart(2, '0') }}</span>
            <div>
              <strong>{{ t.t }}</strong>
              <p>{{ t.d }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ FAQ ============ -->
    <section class="section">
      <div class="container faq-wrap">
        <div class="heading heading--left">
          <span class="eyebrow">FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>Anything else? Send us a message and we will answer within 12 hours.</p>
        </div>
        <div class="faq">
          <div
            v-for="(f, i) in site.faqs"
            :key="f.q"
            class="faq__item"
            :class="{ 'is-open': openFaq === i }"
          >
            <button class="faq__q" @click="openFaq = openFaq === i ? -1 : i">
              <span>{{ f.q }}</span>
              <i>{{ openFaq === i ? '−' : '+' }}</i>
            </button>
            <div v-show="openFaq === i" class="faq__a">{{ f.a }}</div>
          </div>
        </div>
        <RouterLink to="/contact" class="btn btn--primary">Ask a question</RouterLink>
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
