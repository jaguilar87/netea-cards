<template>
  <div class="UnitCardFront">
    <StatsBox
      :type="card.type"
      :speed="card.speed"
      :armour="card.armour"
      :ff="card.ff"
      :cc="card.cc"
    />
    <div class="UnitCardFront-main">
      <WeaponsBox
        v-if="card.weapons && card.weapons.length"
        :weapons="card.weapons"
      />
      <RulesBox
        class="UnitCardFront-rules"
        v-if="card.special_rules && card.special_rules.length"
        :rules="card.special_rules"
      />
    </div>
  </div>
</template>

<script>
import StatsBox from '~/components/cards/units/stats/StatsBox.vue';
import WeaponsBox from '~/components/cards/units/weapons/WeaponsBox.vue';
import RulesBox from '~/components/cards/units/RulesBox.vue';

export default {
  props: {
    card: Object,
  },
  components: {
    StatsBox,
    WeaponsBox,
    RulesBox,
  },
};
</script>

<style lang="scss" scoped>
.UnitCardFront {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  &-main {
    width: 88%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  &-rules {
    padding: 3px 5px;
  }
}
</style>
