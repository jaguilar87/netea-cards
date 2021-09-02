<template>
  <div class="RulesBox">
    <span><strong>Rules:</strong>&nbsp;</span>
    <Rule v-for="rule in rules" :id="rule" :key="rule" class="RulesBox-rule" />
  </div>
</template>

<script>
import Rule from '~/components/cards/units/rules/Rule.vue'

export default {
  components: { Rule },
  props: {
    rules: { type: Array, default: () => [] },
  },
}
</script>

<style lang="scss" scoped>
.RulesBox {
  &-rule + &-rule::before {
    content: ', ';
  }
}
</style>
