<template>
  <div v-if="card" class="UnitCardRear">
    <span v-html="htmlNotes" />
  </div>
</template>

<script>
import { Converter } from 'showdown'

export default {
  props: {
    card: {
      type: Object,
      default: () => null,
    },
  },
  computed: {
    htmlNotes() {
      const converter = new Converter()

      return converter.makeHtml(this.$props.card.notes)
    },
  },
}
</script>

<style lang="scss" scoped>
.UnitCardRear {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 2px 5px;

  & > p {
    text-align: justify;
  }
}
</style>
