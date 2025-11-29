<script setup>
const props = defineProps({
  type: { type: String, default: '' },
});

const iconsPerType = {
  CH: 'mdi:chevron-double-up',
  LV: 'mdi:go-kart',
  AV: 'mdi:tank',
  WE: 'mdi:robot',
  'AC/WE': 'mdi:robot',
  AC: 'mdi:airplane',
  SC: 'mdi:rocket',
  INF: 'mdi:account-group',
};

const icon = iconsPerType[props.type] || 'mdi:alert-rhombus';
</script>

<template>
  <Icon :name="icon" size="20px" />
</template>
