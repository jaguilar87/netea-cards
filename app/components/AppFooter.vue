<script setup>
const { data: now } = await useAsyncData('now', () =>
  queryCollection('constants').first(),
);
const date = new Date(now?.value?.meta?.now).toDateString();
</script>

<template>
  <UFooter class="print:hidden">
    <p>
      <strong>NetEA Unit Cards</strong> by
      <a href="https://github.com/jaguilar87" target="_blank">jaguilar87</a>.
      Last build on <strong>{{ date }}</strong
      >.
    </p>
  </UFooter>
</template>
