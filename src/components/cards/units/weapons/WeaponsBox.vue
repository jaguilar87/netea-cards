<template>
  <table class="WeaponsBox table is-narrow">
    <Weapon
      v-for="weapon in weapons"
      :key="weapon.id"
      :data="weapon.data"
      :multiplier="weapon.multiplier"
      :arc="weapon.arc"
    />
  </table>
</template>

<script>
import Weapon from '~/components/cards/units/weapons/Weapon.vue';

export default {
  props: {
    weapons: Array,
  },
  computed: {},
  components: { Weapon },
};
</script>

<style lang="scss" scoped>
.WeaponsBox {
  width: 100%;
  border: 0;
  margin-bottom: 0 !important;
}
</style>
