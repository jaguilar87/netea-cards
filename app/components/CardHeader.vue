<script setup>
const props = defineProps({
  card: { type: Object, default: null },
  force: { type: String, default: '' },
});

const safeForce = computed(() => {
  if (!props.force) return '';

  return props.force.length + props.card.name.length < 38
    ? props.force
    : acronym(props.force);
});
</script>

<template>
  <div v-if="card" class="CardHeader">
    <UnitTypeIcon class="CardHeader-icon" :type="card.type" />
    <div class="CardHeader-name">
      <span v-if="safeForce" class="CardHeader-force">{{ safeForce }}</span>
      <span>{{ card.name }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.CardHeader {
  width: 100%;
  height: 27px;
  display: flex;
  flex-wrap: wrap;
  padding: 1px 0;
  border-bottom: 1px solid #000;
  background-color: #30254a;
  color: #fff;

  &-icon {
    width: 12%;
    padding-right: 6px;
  }

  &-name {
    width: 88%;
    font-size: 10pt;
    line-height: 24px;
    overflow: hidden;
  }

  &-force {
    opacity: 0.7;
    margin-right: 4px;
  }
}
</style>
