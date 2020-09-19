const path = require('path');

module.exports = {
  siteName: 'NetEA Unit Cards',
  templates: {
    Army: [
      {
        path: '/army/:id',
        component: './src/templates/Army.vue',
      },
    ],
  },
  plugins: [],
  transformers: {
    remark: {
      // global remark options
      grayMatter: {
        excerpt: true,
      },
    },
  },
  chainWebpack: (config) => {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];

    types.forEach((type) => {
      addStyleResource(config.module.rule('sass').oneOf(type));
    });

    // or if you use scss
    types.forEach((type) => {
      addStyleResource(config.module.rule('scss').oneOf(type));
    });

    // SVG
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();
    svgRule.use('vue-svg-loader').loader('vue-svg-loader');
  },
};

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/_globals.sass'),
        // or if you use scss
        path.resolve(__dirname, './src/assets/sass/_globals.scss'),
        // you can also use a glob if you'd prefer
        path.resolve(__dirname, './src/assets/sass/*.sass'),
        // or scss
        path.resolve(__dirname, './src/assets/sass/*.scss'),
        path.resolve(__dirname, './src/components/*.vue'),
      ],
    });
}
