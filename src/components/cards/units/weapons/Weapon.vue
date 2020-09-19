<template>
  <fragment>
    <tr class="Weapon" v-for="(mode, index) in data.modes" :key="index">
      <td v-if="mode.boolean" class="Weapon-name Weapon-name--boolean">
        {{ mode.boolean }}
      </td>
      <td v-else class="Weapon-name">
        <span v-if="multiplier">{{ multiplier }}x </span>
        <span>{{ data.name }}</span>
      </td>
      <td class="Weapon-range" v-html="sanitizeRange(mode.range)"></td>
      <td class="Weapon-rules">
        <span v-if="sanitizeFirepower(mode.firepower)" class="Weapon-rule">{{
          sanitizeFirepower(mode.firepower)
        }}</span>
        <span
          v-for="rule in mode.specialRules"
          :key="rule.id"
          class="Weapon-rule"
          >{{ rule.abbr || rule.name }}</span
        >
        <span v-if="arc" class="Weapon-rule">{{ arc }}</span>
      </td>
    </tr>
  </fragment>
</template>

<script>
export default {
  props: {
    arc: String,
    multiplier: String,
    data: Object,
  },
  methods: {
    sanitizeFirepower(fp) {
      switch (fp) {
        case 'Assault Weapons':
        case 'Small Arms':
          return '';
        default:
          return fp;
      }
    },
    sanitizeRange(rng) {
      switch (rng) {
        case 'Unlimited':
        case 'Infinite':
          return '&infin;';
        default:
          return rng;
      }
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.Weapon {
  &-name {
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
