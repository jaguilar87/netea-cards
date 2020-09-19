<template>
  <div class="Stat">
    <div class="Stat-name">{{ name }}</div>
    <div class="Stat-value">{{ sanitizedValue }}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    value: String,
  },
  computed: {
    sanitizedValue() {
      let value = this.$props.value;

      if (value.indexOf('<br') !== -1) {
        value = value.substring(0, value.indexOf('<br'));
      }

      return value;
    },
  },
};
</script>

<style lang="scss" scoped>
.Stat {
  width: 100%;
  height: 34px;
  text-align: center;
  border-right: 1px solid #000000;

  &-name {
    font-weight: bold;
    line-height: 20px;
  }

  &-value {
    line-height: 10px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #000000;
  }
}
</style>
