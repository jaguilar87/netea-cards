<template>
  <table class="WeaponsBox table is-narrow">
    <Weapon
      v-for="weapon in weapons"
      :id="weapon.id"
      :key="weapon.id"
      :multiplier="weapon.multiplier"
      :arc="weapon.arc"
    />
  </table>
</template>

<script>
import Weapon from '~/components/cards/units/weapons/Weapon.vue'

export default {
  components: { Weapon },
  props: {
    weapons: { type: Array, default: () => [] },
  },
}
</script>

<style lang="scss" scoped>
.WeaponsBox {
  width: 100%;
  border: 0;
  margin-bottom: 0 !important;
}
</style>
