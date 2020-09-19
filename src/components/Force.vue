<template>
  <div class="container">
    <header class="Force-name title is-4">{{ force.name }}</header>
    <UnitCard
      v-for="unit of force.units"
      :key="unit.id"
      :id="unit.id"
      :force="force.name"
    />
  </div>
</template>

<static-query>
query {
  forces: allForce {
    edges {
      node {
        id
        name
        units {
          id
        }
      }
    }
  }
}
</static-query>

<script>
import UnitCard from '~/components/UnitCard.vue';

export default {
  props: {
    id: String,
  },
  computed: {
    force: function () {
      return this.$static.forces.edges.find(
        (edge) => edge.node.id === this.$props.id
      ).node;
    },
  },
  components: {
    UnitCard,
  },
};
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
