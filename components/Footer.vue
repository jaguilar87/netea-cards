<template>
  <footer class="Footer">
    <div class="content has-text-centered">
      <p>
        <strong>NetEA Unit Cards</strong> by
        <a href="https://github.com/jaguilar87" target="_blank">jaguilar87</a>.
        Last build on <strong>{{ date }}</strong
        >.
      </p>
    </div>
  </footer>
</template>

<script>
const now = Date.now()

export default {
  data() {
    return {
      date: new Date(now).toDateString(),
    }
  },
}
</script>

<style lang="scss" scoped>
.Footer {
  margin: 30px 0;

  @media print {
    display: none;
  }
}
</style>
