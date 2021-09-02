<template>
  <div class="Index-forcesList container">
    <NuxtLink
      v-for="army in armies"
      :key="army.slug"
      :to="army.slug"
      class="Index-force button"
    >
      <div class="Index-iconContainer">
        <FactionIcon class="Index-forceIcon" :faction="army.slug" />
      </div>
      <div>{{ army.title }}</div>
    </NuxtLink>
  </div>
</template>

<script>
import FactionIcon from '~/components/icons/FactionIcon.vue'

export default {
  components: {
    FactionIcon,
  },
  async asyncData({ $content }) {
    const armies = await $content('netea40k/army_lists').sortBy('title').fetch()

    return {
      armies,
    }
  },
}
</script>

<style lang="scss" scoped>
.Index {
  &-forcesList {
    display: flex;
    flex-wrap: wrap;
  }

  &-force {
    width: calc(25% - 10px);
    height: 100%;
    margin: 5px;
    display: flex;
    flex-direction: column;

    @media only screen and (max-device-width: 640px) {
      width: 100%;
    }
  }

  &-iconContainer {
    width: 100%;
  }

  &-forceIcon {
    margin: auto;
  }
}
</style>
