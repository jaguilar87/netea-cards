<script setup>
const props = defineProps({
  rules: { type: Array, default: () => [] },
});
</script>

<template>
  <div class="RulesBox">
    <span><strong>Rules:</strong>&nbsp;</span>
    <RuleSingle
      v-for="rule in props.rules"
      :id="rule"
      :key="rule"
      class="RulesBox-rule"
    />
  </div>
</template>

<style lang="scss" scoped>
.RulesBox {
  &-rule + &-rule::before {
    content: ', ';
  }
}
</style>
