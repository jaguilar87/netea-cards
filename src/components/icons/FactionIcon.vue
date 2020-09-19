<template>
  <div class="FactionIcon">
    <component :is="getComponent()" />
  </div>
</template>

<script>
const icons = {
  'admech-knights': ['adeptus-mechanicus-knight-world'],
  'admech-titans': ['adeptus-mechanicus-titan-legion'],
  'chaos-black-legion': ['chaos-space-marine-black-legion'],
  chaos: [
    'chaos-space-marine-red-corsairs',
    'chaos-cultist-stigmatus-covenant',
  ],
  'chaos-emperors-children': ['chaos-space-marine-emperors-children'],
  'chaos-iron-warriors': ['chaos-space-marine-iron-warriors'],
  'dark-eldar': ['dark-eldar'],
  'eldar-alaitoc': ['eldar-alaitoc'],
  'eldar-biel-tan': ['eldar-biel-tan'],
  'eldar-iyanden': ['eldar-iyanden'],
  'eldar-saim-hann': ['eldar-saim-hann'],
  ig: [
    'imperial-guard-baran-siegemasters',
    'imperial-guard-death-korps-of-krieg',
    'imperial-guard-minervan-tank-legion',
  ],
  'ig-steel-legion': ['imperial-guard-steel-legion'],
  marines: ['space-marine-codex-astartes', 'space-marine-scions-of-iron'],
  'marines-imperial-fists': ['space-marine-imperial-fists'],
  'marines-raven-guard': ['space-marine-raven-guard'],
  'marines-salamanders': ['space-marine-salamanders'],
  'marines-space-wolves': ['space-marine-space-wolves'],
  'marines-white-scars': ['space-marine-white-scars'],
  necrons: ['necron'],
  orks: ['ork-feral-orks', 'ork-speed-freeks', 'ork-war-horde'],
  tau: ['tau'],
  tyranids: ['tyranid'],
  default: ['*'],
};

export default {
  props: {
    faction: String,
  },
  data: function () {
    return { icons };
  },
  methods: {
    getComponent: function () {
      const { faction } = this.$props;

      for (const icon of Object.keys(this.icons)) {
        if (this.icons[icon].includes(faction)) return icon;
      }

      return 'default';
    },
  },
  components: loadAllIcons(),
};

function loadAllIcons() {
  const ret = {};

  for (const icon of Object.keys(icons)) {
    ret[icon] = require(`~/assets/faction-icons/${icon}.svg`);
  }

  return ret;
}
</script>

<style lang="scss" scoped>
.FactionIcon {
  display: inline;

  & > svg {
    height: 52px;
  }
}
</style>
