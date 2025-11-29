<script setup>
useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: '' },
    { name: 'format-detection', content: 'telephone=no' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon.png' },
  ],
  script: [{ src: '/browser-agent.js' }],
  htmlAttrs: {
    lang: 'en',
  },
});

const title = 'NetEA Cards';
const description = 'Cards for your Net Epic Armageddon units.';

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/favicon.png',
  twitterImage: '/favicon.png',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@import 'tailwindcss';
@import '@nuxt/ui';

@theme static {
  --font-sans: 'Public Sans', sans-serif;
}

@layer base {
  h2 {
    font-size: var(--text-xl);
    font-weight: 700;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: var(--text-lg);
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  a {
    color: var(--color-primary-800);
  }

  a:hover {
    text-decoration: underline;
  }

  p {
    margin-bottom: 1rem;
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
