<template>
  <Card>
    <CardSide>
      <CardHeader :card="unit" :force="force" />
      <UnitCardFront :card="unit" />
    </CardSide>
    <CardSide>
      <CardHeader :card="unit" :force="force" />
      <UnitCardRear :card="unit" />
    </CardSide>
  </Card>
</template>

<static-query>
query {
  units: allUnit {
    edges {
      node {
        id
        name
        type
        speed
        armour
        cc
        ff
        notes
        weapons {
          arc
          multiplier
          data {
            id
            name
            modes {
              range
              firepower
              boolean
              specialRules {
                id
                name
                abbr
                content
              }
            }
          }
        }
        special_rules {
          id
          name
          abbr
          content
        }
      }
    }
  }
}
</static-query>

<script>
import Card from '~/components/cards/Card.vue';
import CardSide from '~/components/cards/CardSide.vue';
import CardHeader from '~/components/cards/CardHeader.vue';
import UnitCardFront from '~/components/cards/units/UnitCardFront.vue';
import UnitCardRear from '~/components/cards/units/UnitCardRear.vue';

export default {
  props: {
    id: String,
    force: String,
  },
  computed: {
    unit: function () {
      return this.$static.units.edges.find(
        (edge) => edge.node.id === this.$props.id
      ).node;
    },
  },
  components: {
    Card,
    CardSide,
    CardHeader,
    UnitCardFront,
    UnitCardRear,
  },
};
</script>
