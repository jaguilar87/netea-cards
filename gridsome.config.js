const path = require('path');

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

module.exports = {
  siteName: 'NetEA Unit Cards',
  siteUrl: '',
  pathPrefix: '',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: 'data',
        path: 'forces/*.md',
        typeName: 'Force',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: 'data',
        path: 'special_rules/*.md',
        typeName: 'SpecialRule',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: 'data',
        path: 'units/*.md',
        typeName: 'Unit',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: 'data',
        path: 'weapons/*.md',
        typeName: 'Weapon',
      },
    },
  ],
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
  },
};
