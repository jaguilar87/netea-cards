<template>
  <div class="StatsBox">
    <Stat name="TYPE" :value="type" />
    <Stat name="SPD" :value="parsedSpeed" />
    <Stat name="ARM" :value="armour" />
    <Stat name="CC" :value="cc" />
    <Stat name="FF" :value="ff" />
  </div>
</template>

<script>
import Stat from '~/components/cards/units/stats/Stat.vue'

export default {
  components: {
    Stat,
  },
  props: {
    type: String,
    speed: String,
    armour: String,
    ff: String,
    cc: String,
  },
  computed: {
    parsedSpeed() {
      switch (this.$props.speed) {
        case 'Bomber':
          return 'B'
        case 'Fighter-Bomber':
          return 'F/B'
        case 'Fighter':
          return 'F'
        case 'Immobile':
          return '-'
        default:
          return this.$props.speed
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.StatsBox {
  width: 12%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
