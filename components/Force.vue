<template>
  <div v-if="force" class="container">
    <header class="Force-name title is-4">{{ force.name }}</header>
    <UnitCard
      v-for="unit of force.units"
      :id="unit"
      :key="unit"
      :force="force.name"
    />
  </div>
</template>

<script>
import UnitCard from '~/components/UnitCard.vue'

export default {
  components: {
    UnitCard,
  },
  props: {
    id: { type: String, default: '' },
  },
  data() {
    return {
      force: null,
    }
  },
  async fetch() {
    this.force = await this.$content(`netea40k/forces/${this.id}`).fetch()
  },
}
</script>

<style lang="scss" scoped>
.Force {
  &-name {
    margin-bottom: 0;

    @media print {
      display: none;
    }
  }
}
</style>
