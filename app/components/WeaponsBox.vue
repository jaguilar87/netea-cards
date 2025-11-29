<script setup>
const props = defineProps({
  weapons: { type: Array, default: () => [] },
});
</script>

<template>
  <table class="WeaponsBox">
    <WeaponSingle
      v-for="weapon in props.weapons"
      :id="weapon.id"
      :key="weapon.id"
      :multiplier="weapon.multiplier"
      :arc="weapon.arc"
    />
  </table>
</template>

<style lang="scss" scoped>
.WeaponsBox {
  width: 100%;
  border: 0;
  margin-bottom: 0 !important;
}
</style>
