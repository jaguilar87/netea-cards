<template>
  <Card :class="{ 'Card--oversized': isOversized }">
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

<script>
import Card from '~/components/cards/Card.vue'
import CardSide from '~/components/cards/CardSide.vue'
import CardHeader from '~/components/cards/CardHeader.vue'
import UnitCardFront from '~/components/cards/units/UnitCardFront.vue'
import UnitCardRear from '~/components/cards/units/UnitCardRear.vue'

export default {
  components: {
    Card,
    CardSide,
    CardHeader,
    UnitCardFront,
    UnitCardRear,
  },
  props: {
    id: { type: String, default: '' },
    force: { type: String, default: '' },
  },
  data() {
    return {
      unit: null,
      isOversized: false,
    }
  },
  async fetch() {
    this.unit = await this.$content(`netea40k/units/${this.id}`).fetch()

    try {
      const weapons = await this.$content('netea40k/weapons')
        .where({
          slug: { $in: this.unit.weapons.map((weapon) => weapon.id) },
        })
        .fetch()
      const modes = weapons.reduce(
        (acc, weapon) => acc + weapon.modes.length,
        0
      )
      this.isOversized = modes >= 6
    } catch (err) {
      this.isOversized = false
    }
  },
}
</script>
