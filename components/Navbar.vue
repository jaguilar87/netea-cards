<template>
  <nav class="Nav navbar">
    <div class="container">
      <div class="Nav-brand navbar-brand">
        <NuxtLink class="navbar-item" to="/" exact>
          <b-icon class="Nav-icon" icon="cards-outline" />
          <h1>
            NetEA Unit Cards <span v-if="section"> > {{ section }}</span>
          </h1>
        </NuxtLink>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a
              class="Nav-printItem navbar-item"
              href="javascript:window.print()"
              title="Print this page"
            >
              <b-icon class="Nav-printerIcon" icon="printer" />
            </a>
            <NuxtLink
              class="Nav-homeItem navbar-item"
              to="/"
              title="Home"
              exact
            >
              <b-icon class="Nav-homeIcon" icon="cards" />
            </NuxtLink>
            <NuxtLink class="navbar-item" to="/faq/" title="FAQ">
              <b-icon class="Nav-faqIcon" icon="frequently-asked-questions" />
            </NuxtLink>
            <a
              class="navbar-item"
              href="https://github.com/jaguilar87/netea-cards"
              target="_blank"
            >
              <b-icon class="Nav-githubIcon" icon="github" title="See repo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    section: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped>
.Nav {
  @media print {
    display: none !important;
  }

  &-brand {
    @media only screen and (max-device-width: 640px) {
      display: none;
    }
  }

  &-printItem {
    @media only screen and (max-device-width: 640px) {
      display: none;
    }
  }

  &-homeItem {
    display: none;

    @media only screen and (max-device-width: 640px) {
      display: block;
    }
  }

  &-icon {
    margin-right: 5px;
  }

  &-githubIcon,
  &-printerIcon,
  &-faqIcon,
  &-homeIcon {
    color: black;
  }
}
</style>
