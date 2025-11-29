<script setup>
const props = defineProps({
  id: { type: String, default: '' },
});
const { data: rule } = await useAsyncData(`rule:${props.id}`, () =>
  queryCollection('specialRules')
    .path(`/netea40k/special_rules/${props.id}`)
    .first(),
);
</script>

<template>
  <span v-if="rule" class="Rule">{{ rule.meta.abbr || rule.meta.name }}</span>
</template>
