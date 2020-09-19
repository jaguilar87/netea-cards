<template>
  <nav class="Nav navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <g-link class="navbar-item" to="/">
          <b-icon class="Nav-icon" icon="cards-outline" />
          <h1>
            NetEA Unit Cards <span v-if="section"> - {{ section }}</span>
          </h1>
        </g-link>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <b-navbar-item>
                <a href="/faq" title="FAQ">
                  <b-icon
                    class="Nav-faqIcon"
                    icon="frequently-asked-questions"
                  />
                </a>
              </b-navbar-item>
              <b-navbar-item>
                <a href="javascript:window.print()" title="Print this page">
                  <b-icon class="Nav-printerIcon" icon="printer" />
                </a>
              </b-navbar-item>
              <b-navbar-item>
                <a
                  href="https://github.com/jaguilar87/card-generator"
                  target="_blank"
                >
                  <b-icon
                    class="Nav-githubIcon"
                    icon="github"
                    title="See repo"
                  />
                </a>
              </b-navbar-item>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    section: String,
  },
};
</script>

<style lang="scss" scoped>
@media print {
  .Nav {
    display: none !important;
  }
}

.Nav {
  &-icon {
    margin-right: 5px;
  }

  &-githubIcon,
  &-printerIcon,
  &-faqIcon {
    color: black;
  }
}
</style>
