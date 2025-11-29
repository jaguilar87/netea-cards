<script setup>
const icons = [
  { icon: 'admech-knights.svg', lists: ['adeptus-mechanicus-knight-world'] },
  { icon: 'admech-titans.svg', lists: ['adeptus-mechanicus-titan-legion'] },
  {
    icon: 'admech-skitarii.png',
    lists: ['adeptus-mechanicus-skitarii-legion'],
  },
  {
    icon: 'chaos-default.svg',
    lists: [
      'chaos-cultist-slaves-to-darkness',
      'chaos-cultist-stigmatus-covenant',
      'chaos-space-marine-red-corsairs',
    ],
  },
  {
    icon: 'chaos-black-legion.svg',
    lists: ['chaos-space-marine-black-legion'],
  },
  {
    icon: 'chaos-emperors-children.svg',
    lists: ['chaos-space-marine-emperors-children'],
  },
  {
    icon: 'chaos-iron-warriors.svg',
    lists: ['chaos-space-marine-iron-warriors'],
  },
  { icon: 'dark-eldar.svg', lists: ['dark-eldar'] },
  { icon: 'eldar-alaitoc.svg', lists: ['eldar-alaitoc'] },
  { icon: 'eldar-biel-tan.svg', lists: ['eldar-biel-tan'] },
  { icon: 'eldar-iyanden.svg', lists: ['eldar-iyanden'] },
  { icon: 'eldar-saim-hann.svg', lists: ['eldar-saim-hann'] },
  {
    icon: 'imperial-guard-rifles.svg',
    lists: [
      'imperial-guard-baran-siegemasters',
      'imperial-guard-minervan-tank-legion',
    ],
  },
  {
    icon: 'imperial-guard-krieg.png',
    lists: ['imperial-guard-death-korps-of-krieg'],
  },
  {
    icon: 'imperial-guard-steel-legion.svg',
    lists: ['imperial-guard-steel-legion'],
  },
  {
    icon: 'inquisition.png',
    lists: ['inquisition-ordo-xenos'],
  },
  {
    icon: 'marines.svg',
    lists: ['space-marine-codex-astartes', 'space-marine-scions-of-iron'],
  },
  {
    icon: 'marines-imperial-fists.svg',
    lists: ['space-marine-imperial-fists'],
  },
  { icon: 'marines-raven-guard.svg', lists: ['space-marine-raven-guard'] },
  { icon: 'marines-salamanders.svg', lists: ['space-marine-salamanders'] },
  { icon: 'marines-space-wolves.svg', lists: ['space-marine-space-wolves'] },
  { icon: 'marines-white-scars.svg', lists: ['space-marine-white-scars'] },
  { icon: 'necrons.svg', lists: ['necron'] },
  {
    icon: 'orks.svg',
    lists: [
      'ork-feral-orks',
      'ork-speed-freeks',
      'ork-war-horde',
      'ork-gargant-mob',
    ],
  },
  { icon: 'tau.svg', lists: ['tau'] },
  { icon: 'tyranids.svg', lists: ['tyranid'] },
];

const props = defineProps({
  faction: { type: String, default: '' },
});

const { icon } = icons.find((icon) => icon.lists.includes(props.faction)) || {
  icon: 'default.svg',
};
</script>

<template>
  <img
    class="h-[52px] inline"
    :src="`/img/faction-icons/${icon}`"
    :alt="`${faction}`"
  />
</template>
