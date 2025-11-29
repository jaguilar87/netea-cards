<template>
  <UHeader class="print:hidden" :toggle="{ class: 'hidden' }">
    <template #left>
      <NuxtLink
        class="navbar-item flex flex-row gap-[5px] active-black text-black hover:no-underline"
        to="/"
        exact
      >
        <Icon name="mdi:cards-outline" />
        <h1 class="text-sm">NetEA Unit Cards</h1>
      </NuxtLink>
    </template>

    <template #right>
      <UButton
        class="hover:bg-purple-100 cursor-pointer"
        onclick="javascript: window.print();"
        icon="mdi:printer"
        aria-label="Print this page"
        title="Print this page"
        color="neutral"
        variant="ghost"
      />

      <UButton
        class="hover:bg-purple-100"
        to="/faq/"
        icon="mdi:frequently-asked-questions"
        aria-label="FAQ"
        title="FAQ"
        color="neutral"
        variant="ghost"
      />

      <UButton
        class="hover:bg-purple-100 cursor-pointer"
        to="https://github.com/jaguilar87/netea-cards"
        target="_blank"
        icon="mdi:github"
        aria-label="See GitHub repo"
        title="See GitHub repo"
        color="neutral"
        variant="ghost"
      />
    </template>
  </UHeader>
</template>
