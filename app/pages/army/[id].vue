<template>
  <div
    v-if="army"
    class="max-w-(--ui-container) mx-auto print:max-w-full px-4 sm:px-6 lg:px-8 print:px-0"
  >
    <ForceSection v-for="force of army.meta.forces" :id="force" :key="force" />
  </div>
</template>

<script setup>
const route = useRoute();
const { data: army } = await useAsyncData(`army:${route.params.id}`, () =>
  queryCollection('armies')
    .path(`/netea40k/army_lists/${route.params.id}`)
    .first(),
);
</script>
