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

  &--oversized {
    font-size: 6pt;
  }

  @media print {
    margin: 1px;
    page-break-inside: avoid;
  }
}
</style>
