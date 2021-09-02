<template>
  <tbody v-if="weapon">
    <tr v-for="(mode, index) in weapon.modes" :key="index" class="Weapon">
      <td v-if="mode.boolean" class="Weapon-name Weapon-name--boolean">
        {{ mode.boolean }}
      </td>
      <td v-else class="Weapon-name">
        <span v-if="multiplier">{{ multiplier }}x </span>
        <span>{{ weapon.name }}</span>
      </td>
      <td class="Weapon-range" v-html="sanitizeRange(mode.range)"></td>
      <td class="Weapon-rules">
        <span v-if="sanitizeFirepower(mode.firepower)" class="Weapon-rule">{{
          sanitizeFirepower(mode.firepower)
        }}</span>
        <Rule
          v-for="rule in mode.special_rules"
          :id="rule"
          :key="rule"
          class="Weapon-rule"
        />
        <span v-if="arc" class="Weapon-rule">{{ arc }}</span>
      </td>
    </tr>
  </tbody>
</template>

<script>
import Rule from '~/components/cards/units/rules/Rule.vue'

export default {
  components: { Rule },
  props: {
    id: { type: String, default: '' },
    arc: { type: String, default: '' },
    multiplier: { type: [String, Number], default: '' },
  },
  data() {
    return {
      weapon: {},
    }
  },
  async fetch() {
    this.weapon = await this.$content(`netea40k/weapons/${this.id}`).fetch()
  },
  methods: {
    sanitizeFirepower(fp) {
      switch (fp) {
        case 'Assault Weapons':
        case 'Small Arms':
          return ''
        default:
          return fp
      }
    },
    sanitizeRange(rng) {
      switch (rng) {
        case 'Unlimited':
        case 'Infinite':
          return '&infin;'
        default:
          return rng
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.Weapon {
  border: 1px solid #dbdbdb;
  border-width: 0 0 1px;

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
