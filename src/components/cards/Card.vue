<template>
  <div class="Card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.Card {
  display: inline-flex;
  flex-direction: column;
  font-size: 7pt;
  margin: 10px;
  margin-bottom: 12px;

  @media print {
    &:nth-child(9n):not(:last-child) {
      margin-bottom: 100px;
    }
  }
}
</style>
