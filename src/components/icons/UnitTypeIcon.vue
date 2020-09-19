<template>
  <b-icon :icon="getIconName()" />
</template>

<script>
export default {
  props: {
    type: String,
  },
  data: function () {
    return {
      icons: {
        'chevron-double-up': ['CH'],
        'go-kart': ['LV'],
        tank: ['AV'],
        robot: ['WE', 'AC/WE'],
        airplane: ['AC'],
        rocket: ['SC'],
        'account-group': ['INF'],
      },
    };
  },
  methods: {
    getIconName: function () {
      const { type } = this.$props;

      for (const icon of Object.keys(this.icons)) {
        if (this.icons[icon].includes(type)) return icon;
      }

      return 'alert-rhombus';
    },
  },
};
</script>
