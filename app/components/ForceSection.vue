<template>
  <div v-if="force">
    <h3 class="print:hidden">{{ force.meta.name }}</h3>
    <UnitCard
      v-for="unit of force.meta.units"
      :id="unit"
      :key="unit"
      :force="force.meta.name"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  id: { type: String, required: true },
});
const { data: force } = await useAsyncData(`force:${props.id}`, () =>
  queryCollection(`forces`).path(`/netea40k/forces/${props.id}`).first(),
);
</script>
