<template>
  <Layout>
    <div class="Index-forcesList container">
      <g-link
        class="Index-force button"
        v-for="edge in $page.armies.edges"
        :key="edge.node.id"
        :to="edge.node.path"
      >
        <div class="Index-iconContainer">
          <FactionIcon class="Index-forceIcon" :faction="edge.node.id" />
        </div>
        <div>{{ edge.node.title }}</div>
      </g-link>
    </div>
  </Layout>
</template>

<page-query>
query {
  armies: allArmy (sortBy: "title", order: ASC) {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>

<script>
import FactionIcon from '~/components/icons/FactionIcon.vue';

export default {
  components: {
    FactionIcon,
  },
};
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
