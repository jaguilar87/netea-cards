<template>
  <div>
    <Navbar :section="section" />
    <transition name="fade" appear>
      <main>
        <!-- a wrapper for slot is needed -->
        <slot />
        <!-- the content -->
      </main>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer';

export default {
  props: {
    section: String,
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
@page {
  size: A4;
}

@media print {
  html,
  body {
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
