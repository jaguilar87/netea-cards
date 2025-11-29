<template>
  <UContainer class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1">
    <UButton
      v-for="army in armies"
      :key="army.id"
      :to="`army/${army.stem.replace('netea40k/army_lists/', '')}`"
      color="ghost"
      class="cursor-pointer border border-gray-400 flex flex-col hover:bg-primary-100"
    >
      <FactionIcon :faction="army.stem.replace('netea40k/army_lists/', '')" />
      <div class="text-center text-black hover:no-underline">
        {{ army.title }}
      </div>
    </UButton>
  </UContainer>
</template>

<script setup>
const { data: armies } = await useAsyncData('armies', () =>
  queryCollection('armies').order('title', 'ASC').all(),
);
</script>
