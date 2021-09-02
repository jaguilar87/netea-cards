<template>
  <div v-if="army">
    <Force v-for="force of army.forces" :id="force" :key="force" />
  </div>
</template>

<script>
import Force from '~/components/Force.vue'

export default {
  components: {
    Force,
  },
  async asyncData({ params, $content }) {
    return {
      army: await $content(`netea40k/army_lists/${params.army}`).fetch(),
    }
  },
}
</script>
