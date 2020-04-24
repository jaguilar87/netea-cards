<template>
  <Layout title="Forces">
    <div class="container"></div>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>NetEA Unit Cards</strong> by
          <a href="https://github.com/jaguilar87">jaguilar87</a>.
        </p>
        <p>
          Last build on <strong>{{ date }}</strong
          >.
        </p>
      </div>
    </footer>
  </Layout>
</template>

<script>
import now from '~/.temp/now';

export default {
  data() {
    return {
      date: new Date(now).toDateString(),
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
@media print {
  .footer {
    display: none;
  }
}
</style>
