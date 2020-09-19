<template>
  <div class="CardSide">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.CardSide {
  height: 52mm;
  width: 78mm;
  overflow: hidden;
  border: 1px solid #000000;
  border-radius: 6px;
  display: inline-flex;
  flex-direction: column;

  @media print {
    &:last-child {
      transform: rotate(-180deg);
    }
  }
}
</style>
