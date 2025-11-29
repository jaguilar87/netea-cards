<script setup>
const props = defineProps({
  id: { type: String, required: true },
  force: { type: String, required: true },
});

const { data: unit } = await useAsyncData(`unit:${props.id}`, () =>
  queryCollection('units').path(`/netea40k/units/${props.id}`).first(),
);
const { data: weapons } = await useAsyncData(
  `weapons-for-unit:${props.id}`,
  () =>
    queryCollection('weapons')
      .where(
        'stem',
        'in',
        unit?.value?.meta?.weapons?.map(
          (weapon) => `netea40k/weapons/${weapon.id}`,
        ),
      )
      .all(),
);
const isOversized = computed(() => {
  const modes = weapons?.value?.reduce(
    (acc, weapon) => acc + weapon?.meta?.modes?.length,
    0,
  );
  return modes >= 6;
});
</script>

<template>
  <CardLayout :class="{ 'Card--oversized': isOversized }">
    <CardSide>
      <CardHeader :card="unit.meta" :force="force" />
      <UnitCardFront :card="unit.meta" />
    </CardSide>
    <CardSide>
      <CardHeader :card="unit.meta" :force="force" />
      <UnitCardRear :card="unit.meta" />
    </CardSide>
  </CardLayout>
</template>
