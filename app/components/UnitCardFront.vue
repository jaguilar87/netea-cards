<script setup>
defineProps({
  card: { type: Object, default: () => {} },
});
</script>

<template>
  <div v-if="card" class="UnitCardFront">
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
        v-if="card.special_rules && card.special_rules.length"
        :rules="card.special_rules"
        class="UnitCardFront-rules"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.UnitCardFront {
  width: 100%;
  height: 100%;
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
