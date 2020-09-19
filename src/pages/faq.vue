<template>
  <Layout>
    <main class="container">
      <header class="is-4 title">Frequently Asked Questions</header>
      <header class="is-5 title">Are these cards up to date?</header>
      <p>
        These cards are <strong>automatically generated</strong> from the
        contents of the
        <a
          href="https://github.com/dsusco/tp.net-armageddon.org"
          target="_blank"
          >NetEA Tournament Pack repo</a
        >
        is updated.
      </p>
      <p>
        The last generation date is <strong>{{ date }}</strong
        >.
      </p>
      <header class="is-5 title">Where are those icons from?</header>
      <p>
        From <a href="http://bakadesign.dk/" target="_blank">Baka Design</a> and
        <a href="https://materialdesignicons.com/" target="_blank"
          >Material Design Icons</a
        >.
      </p>
      <header class="is-5 title">I want to print these</header>
      <p>
        Just hit print, all headers and unnecessary information will disappear.
        Cards rear will be flipped 180º so you can fold them.
      </p>
      <header class="is-5 title">The profile X is wrong</header>
      <p>
        Go to the
        <a
          href="https://github.com/dsusco/tp.net-armageddon.org"
          target="_blank"
          >NetEA Tournament Pack repo</a
        >
        and open a PR.
      </p>
      <header class="is-5 title">The contents from card X overflow</header>
      <p>
        Unfortunately, cards cannot be styled individually. Some unit profiles
        are just too long for a card (I'm looking at you Warmonger).
      </p>
      <header class="is-5 title">Can you add the list X?</header>
      <p>
        This app loads the data from the
        <a
          href="https://github.com/dsusco/tp.net-armageddon.org"
          target="_blank"
          >NetEA Tournament Pack repo</a
        >, and so, only cards present there can be added. If you have a
        different source of data I could use, please
        <a href="https://github.com/jaguilar87/card-generator/issues/new"
          >open an issue</a
        >, and let's discuss it.
      </p>
      <header class="is-5 title">I have a suggestion / found a bug</header>
      <p>
        Great! Please
        <a href="https://github.com/jaguilar87/card-generator/issues/new"
          >open an issue</a
        >, and let's discuss it.
      </p>
    </main>
  </Layout>
</template>

<script>
import now from '~/.temp/now';

export default {
  computed: {
    date() {
      const date = new Date(now);

      return date.toDateString() + ' ' + date.toTimeString();
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  margin: 15px 0;
}
</style>
