<template>
  <span v-if="id" class="Rule">{{ rule.abbr || rule.name }}</span>
</template>
<script>
export default {
  props: {
    id: { type: String, default: '' },
  },
  data() {
    return {
      rule: {},
    }
  },
  async fetch() {
    this.rule = await this.$content(`netea40k/special_rules/${this.id}`).fetch()
  },
}
</script>
