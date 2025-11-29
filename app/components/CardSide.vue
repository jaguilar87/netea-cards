<template>
  <div class="CardSide">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.CardSide {
  height: 45mm;
  width: 68mm;
  overflow: hidden;
  border: 1px solid #000;
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
