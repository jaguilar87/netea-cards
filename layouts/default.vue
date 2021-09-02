<template>
  <div>
    <Navbar :section="section" />
    <transition name="fade" appear>
      <main>
        <Nuxt />
      </main>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'

export default {
  components: {
    Navbar,
    Footer,
  },
  props: {
    section: {
      type: String,
      default: '',
    },
  },
}
</script>

<style>
@media print {
  @page {
    size: portrait;
  }

  html,
  body {
    border: 0;
    width: 210mm;
    height: 297mm;
  }
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>
