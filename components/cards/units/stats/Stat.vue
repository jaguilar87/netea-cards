<template>
  <div class="Stat">
    <div class="Stat-name">{{ name }}</div>
    <div class="Stat-value">{{ sanitizedValue }}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: '' },
    value: { type: String, default: '' },
  },
  computed: {
    sanitizedValue() {
      let value = this.$props.value

      if (value && value.includes('<br')) {
        value = value.substring(0, value.indexOf('<br'))
      }

      return value
    },
  },
}
</script>

<style lang="scss" scoped>
.Stat {
  width: 100%;
  height: 100%;
  text-align: center;
  border-right: 1px solid #000;

  &-name {
    font-weight: bold;
  }

  &-value {
    line-height: 10px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #000;
  }
}
</style>
