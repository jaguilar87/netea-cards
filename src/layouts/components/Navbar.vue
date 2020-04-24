<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <g-link class="navbar-item" to="/">
        <b-icon class="Nav-icon" icon="cards-outline" />
        <h1>NetEA Unit Cards</h1>
      </g-link>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <b-navbar-item>
              <a href="javascript:window.print()">
                <b-icon class="Nav-printerIcon" icon="printer" />
              </a>
            </b-navbar-item>
            <b-navbar-item>
              <a
                href="https://github.com/jaguilar87/card-generator"
                target="_blank"
              >
                <b-icon class="Nav-githubIcon" icon="github-circle" />
              </a>
            </b-navbar-item>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@media print {
  .nav {
    display: none !important;
  }
}

.Nav {
  &-icon {
    margin-right: 5px;
  }

  &-githubIcon,
  &-printerIcon {
    color: black;
  }
}
</style>
