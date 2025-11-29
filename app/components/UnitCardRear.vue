<script setup>
import markdownit from 'markdown-it';
const md = new markdownit();

const props = defineProps({
  card: {
    type: Object,
    default: () => null,
  },
});
const htmlNotes = md.render(props.card.notes || '');
</script>

<template>
  <div v-if="card" class="UnitCardRear">
    <span v-html="htmlNotes" />
  </div>
</template>

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
