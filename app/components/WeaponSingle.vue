<script setup>
const props = defineProps({
  id: { type: String, default: '' },
  arc: { type: String, default: '' },
  multiplier: { type: [String, Number], default: '' },
});
const { data: weapon } = await useAsyncData(`weapon:${props.id}`, () =>
  queryCollection('weapons').path(`/netea40k/weapons/${props.id}`).first(),
);
const sanitizeFirepower = (fp) => {
  switch (fp) {
    case 'Assault Weapons':
    case 'Small Arms':
      return '';
    default:
      return fp;
  }
};
const sanitizeRange = (rng) => {
  switch (rng) {
    case 'Unlimited':
    case 'Infinite':
      return '∞';
    default:
      return rng;
  }
};
</script>

<template>
  <tbody v-if="weapon">
    <tr v-for="(mode, index) in weapon.meta.modes" :key="index" class="Weapon">
      <td v-if="mode.boolean" class="Weapon-name Weapon-name--boolean">
        {{ mode.boolean }}
      </td>
      <td v-else class="Weapon-name">
        <span v-if="multiplier">{{ multiplier }}x </span>
        <span>{{ weapon.meta.name }}</span>
      </td>
      <td class="Weapon-range">{{ sanitizeRange(mode.range) }}</td>
      <td class="Weapon-rules">
        <span v-if="sanitizeFirepower(mode.firepower)" class="Weapon-rule">{{
          sanitizeFirepower(mode.firepower)
        }}</span>
        <RuleSingle
          v-for="rule in mode.special_rules"
          :id="rule"
          :key="rule"
          class="Weapon-rule"
        />
        <span v-if="props.arc" class="Weapon-rule">{{ props.arc }}</span>
      </td>
    </tr>
  </tbody>
</template>

<style lang="scss" scoped>
.Weapon {
  border: 1px solid #dbdbdb;
  border-width: 0 0 1px;

  &-name {
    padding: 0.25em 0.5em;
    max-width: 75px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &--boolean {
      text-align: right;
    }
  }

  &-rule + &-rule::before {
    content: ', ';
  }
}
</style>
