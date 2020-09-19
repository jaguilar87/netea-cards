<template>
  <Layout :section="$page.army.title">
    <Force v-for="force of $page.army.forces" :key="force.id" :id="force.id" />
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  army(id: $id) {
    id
    title
    forces {
      id
    }
  }
}
</page-query>

<script>
import Force from '~/components/Force.vue';

export default {
  components: {
    Force,
  },
};
</script>
