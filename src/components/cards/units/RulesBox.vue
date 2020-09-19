<template>
  <div class="RulesBox">
    <span><strong>Rules:</strong>&nbsp;</span>
    <span class="RulesBox-rule" v-for="rule in rules" :key="rule.id">{{
      rule.abbr || rule.name
    }}</span>
  </div>
</template>

<script>
export default {
  props: {
    rules: Array,
  },
};
</script>

<style lang="scss" scoped>
.RulesBox {
  &-rule + &-rule::before {
    content: ', ';
  }
}
</style>
