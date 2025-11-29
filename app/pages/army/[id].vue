<template>
  <div v-if="army">
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
