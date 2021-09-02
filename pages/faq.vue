<template>
  <Layout section="Frequently Asked Questions">
    <main class="container">
      <div class="content">
        <header class="title is-4">Frequently Asked Questions</header>
        <header class="title is-5">Are these cards up to date?</header>
        <p>
          These cards are <strong>automatically generated</strong> from the
          contents of the
          <a
            href="https://github.com/dsusco/tp.net-armageddon.org"
            target="_blank"
            >NetEA Tournament Pack repo</a
          >.
        </p>
        <p>
          The last build date is <strong>{{ date }}</strong
          >.
        </p>
        <header class="title is-5">Where are those icons from?</header>
        <p>
          From
          <a href="http://bakadesign.dk/" target="_blank">Baka Design</a> and
          <a href="https://materialdesignicons.com/" target="_blank"
            >Material Design Icons</a
          >.
        </p>
        <header class="title is-5">I want to print the cards</header>
        <p>
          Just hit print. All headers and unnecessary information will
          disappear. Cards rear will be flipped 180º so you can fold them.
        </p>
        <header class="title is-5">
          How big are the cards? Which sleeves can I use?
        </header>
        <p>
          The cards are <strong>45x68mm</strong>. You can use
          <strong>Mini Euro</strong> sleeves.
        </p>
        <header class="title is-5">The profile X is wrong</header>
        <p>
          Go to the
          <a
            href="https://github.com/dsusco/tp.net-armageddon.org"
            target="_blank"
            >NetEA Tournament Pack repo</a
          >
          and open a PR.
        </p>
        <header class="title is-5">The content from card X overflows</header>
        <p>
          Unfortunately cards cannot be styled individually. Some unit profiles
          are just too long for a card (I'm looking at you Warmonger).
        </p>
        <header class="title is-5">Can you add the list X?</header>
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
        <header class="title is-5">I have a suggestion / found a bug</header>
        <p>
          Great! Please
          <a href="https://github.com/jaguilar87/card-generator/issues/new"
            >open an issue</a
          >, and let's discuss it.
        </p>
      </div>
    </main>
  </Layout>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const now = await $content('now').fetch()
    const date = new Date(now.now)

    return {
      date: date.toDateString() + ' ' + date.toTimeString(),
    }
  },
}
</script>

<style lang="scss" scoped>
.title.is-5 {
  margin-bottom: 1rem;
  margin-top: 1.8rem;
}
</style>
