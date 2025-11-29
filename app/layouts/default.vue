<template>
  <UApp>
    <AppHeader />
    <UMain class="p-2">
      <slot />
    </UMain>
    <AppFooter />
  </UApp>
</template>

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
</style>
