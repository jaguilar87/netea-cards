<script setup>
const { data: now } = await useAsyncData('now', () =>
  queryCollection('constants').first(),
);
const date = new Date(now?.value?.meta?.now);
const since = `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
</script>

<template>
  <UContainer>
    <h2>Frequently Asked Questions</h2>
    <h3>Are these cards up to date?</h3>
    <p>
      These cards are <strong>automatically generated</strong> from the contents
      of the
      <a href="https://github.com/dsusco/tp.net-armageddon.org" target="_blank"
        >NetEA Tournament Pack repo</a
      >.
    </p>
    <p>
      The last build date is <strong>{{ since }}</strong
      >.
    </p>
    <h3>Where are those icons from?</h3>
    <p>
      From
      <strong>Baka Design</strong> and
      <a href="https://materialdesignicons.com/" target="_blank"
        >Material Design Icons</a
      >.
    </p>
    <h3>I want to print the cards</h3>
    <p>
      Just hit print. All headers and unnecessary information will disappear.
      Cards rear will be flipped 180º so you can fold them.
    </p>
    <h3>How big are the cards? Which sleeves can I use?</h3>
    <p>
      The cards are <strong>45x68mm</strong>. You can use
      <strong>Mini Euro</strong> sleeves.
    </p>
    <h3>The profile X is wrong</h3>
    <p>
      Go to the
      <a href="https://github.com/dsusco/tp.net-armageddon.org" target="_blank"
        >NetEA Tournament Pack repo</a
      >
      and open a PR.
    </p>
    <h3>The content from card X overflows</h3>
    <p>
      Unfortunately cards cannot be styled individually. Some unit profiles are
      just too long for a card (I'm looking at you Warmonger).
    </p>
    <h3>Can you add the list X?</h3>
    <p>
      This app loads the data from the
      <a href="https://github.com/dsusco/tp.net-armageddon.org" target="_blank"
        >NetEA Tournament Pack repo</a
      >, and so, only cards present there can be added. If you have a different
      source of data I could use, please
      <a href="https://github.com/jaguilar87/netea-cards/issues/new"
        >open an issue</a
      >, and let's discuss it.
    </p>
    <h3>I have a suggestion / found a bug</h3>
    <p>
      Great! Please
      <a href="https://github.com/jaguilar87/netea-cards/issues/new"
        >open an issue</a
      >, and let's discuss it.
    </p>
  </UContainer>
</template>
