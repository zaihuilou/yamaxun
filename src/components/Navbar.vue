<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { site } from '../data/site'

const menuOpen = ref(false)
const scrolled = ref(false)

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function onScroll() {
  scrolled.value = window.scrollY > 10
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="nav" :class="{ 'nav--solid': scrolled }">
    <div class="container nav__inner">
      <RouterLink to="/" class="logo" @click="menuOpen = false">
        <span class="logo__mark">CT</span>
        <span class="logo__text">
          <strong>{{ site.brand }}</strong>
          <small>{{ site.tagline }}</small>
        </span>
      </RouterLink>

      <nav class="nav__links" :class="{ 'is-open': menuOpen }">
        <RouterLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="nav__link"
          @click="menuOpen = false"
        >
          {{ l.label }}
        </RouterLink>
        <RouterLink to="/contact" class="btn btn--primary nav__cta" @click="menuOpen = false">
          Get a Quote
        </RouterLink>
      </nav>

      <button
        class="nav__toggle"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation"
        @click="menuOpen = !menuOpen"
      >
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.nav--solid {
  border-bottom-color: var(--line);
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.05);
}

.nav__inner {
  height: var(--nav-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.logo__mark {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--accent), #ffb347);
  color: #fff;
  font-weight: 800;
  font-size: 15px;
  letter-spacing: 0.02em;
  display: grid;
  place-items: center;
  box-shadow: 0 6px 16px rgba(255, 122, 24, 0.35);
}

.logo__text {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}

.logo__text strong {
  color: var(--brand);
  font-size: 18px;
  letter-spacing: 0.06em;
}

.logo__text small {
  color: var(--muted);
  font-size: 11px;
}

/* Links */
.nav__links {
  display: flex;
  align-items: center;
  gap: 34px;
}

.nav__link {
  position: relative;
  font-size: 15px;
  font-weight: 600;
  color: var(--ink);
  padding: 6px 0;
  transition: color 0.18s ease;
}

.nav__link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: var(--accent);
  transition: width 0.22s ease;
}

.nav__link:hover,
.nav__link.router-link-active {
  color: var(--accent);
}

.nav__link:hover::after,
.nav__link.router-link-active::after {
  width: 100%;
}

.nav__cta {
  padding: 11px 22px;
  font-size: 14px;
}

/* Mobile toggle */
.nav__toggle {
  display: none;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  border: 1px solid var(--line);
  position: relative;
}

.nav__toggle span,
.nav__toggle span::before,
.nav__toggle span::after {
  content: '';
  position: absolute;
  left: 11px;
  width: 18px;
  height: 2px;
  background: var(--brand);
  transition: transform 0.25s ease, opacity 0.2s ease;
}

.nav__toggle span {
  top: 20px;
}
.nav__toggle span::before {
  top: -6px;
}
.nav__toggle span::after {
  top: 6px;
}

.nav__toggle span.open {
  background: transparent;
}
.nav__toggle span.open::before {
  transform: translateY(6px) rotate(45deg);
}
.nav__toggle span.open::after {
  transform: translateY(-6px) rotate(-45deg);
}

@media (max-width: 900px) {
  .nav__toggle {
    display: block;
  }

  .nav__links {
    position: absolute;
    top: var(--nav-h);
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    background: #fff;
    border-bottom: 1px solid var(--line);
    box-shadow: var(--shadow);
    padding: 8px 18px 20px;
    display: none;
  }

  .nav__links.is-open {
    display: flex;
  }

  .nav__link {
    padding: 14px 4px;
    border-bottom: 1px solid var(--line);
  }

  .nav__link::after {
    display: none;
  }

  .nav__cta {
    margin-top: 16px;
    width: 100%;
  }
}

/* Very small phones: the tagline would push the row wider than the screen */
@media (max-width: 640px) {
  .container {
    padding: 0 14px;
  }

  .logo__text small {
    display: none;
  }

  .logo__text strong {
    font-size: 17px;
  }

  .nav {
    --nav-h: 64px;
  }
}
</style>
