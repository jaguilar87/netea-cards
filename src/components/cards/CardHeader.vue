<template>
  <div class="CardHeader">
    <UnitTypeIcon class="CardHeader-icon" :type="card.type" />
    <div class="CardHeader-name">
      <span v-if="safeForce" class="CardHeader-force">{{ safeForce }}</span>
      <span> {{ card.name }}</span>
    </div>
  </div>
</template>

<script>
import UnitTypeIcon from '~/components/icons/UnitTypeIcon.vue';
import acronym from '~/utils/acronym.js';

export default {
  props: {
    card: Object,
    force: String,
  },
  computed: {
    safeForce() {
      if (!this.force) return '';

      return this.force.length + this.card.name.length < 38
        ? this.force
        : acronym(this.force);
    },
  },
  components: {
    UnitTypeIcon,
  },
};
</script>

<style lang="scss" scoped>
.CardHeader {
  width: 100%;
  height: 27px;
  display: flex;
  flex-wrap: wrap;
  padding: 1px 5px;
  border-bottom: 1px solid #000000;
  background-color: #30254a;
  color: #ffffff;

  &-icon {
    width: 10%;
    padding-right: 6px;
  }

  &-name {
    width: 90%;
    font-size: 10pt;
    line-height: 24px;
    overflow: hidden;
  }

  &-force {
    opacity: 0.7;
  }
}
</style>
