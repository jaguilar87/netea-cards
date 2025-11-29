<template>
  <div class="StatsBox">
    <StatSingle name="TYPE" :value="type" />
    <StatSingle name="SPD" :value="parsedSpeed" />
    <StatSingle name="ARM" :value="armour" />
    <StatSingle name="CC" :value="cc" />
    <StatSingle name="FF" :value="ff" />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
    },
    speed: {
      type: String,
      default: '',
    },
    armour: {
      type: String,
      default: '',
    },
    ff: {
      type: String,
      default: '',
    },
    cc: {
      type: String,
      default: '',
    },
  },
  computed: {
    parsedSpeed() {
      switch (this.$props.speed) {
        case 'Bomber':
          return 'B';
        case 'Fighter-Bomber':
          return 'F/B';
        case 'Fighter':
          return 'F';
        case 'Immobile':
          return '-';
        default:
          return this.$props.speed;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.StatsBox {
  width: 12%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
