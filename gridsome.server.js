// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
module.exports = function (api) {
  api.chainWebpack((config, { isServer }) => {});

  api.loadSource(({ addSchemaTypes }) => {
    addSchemaTypes(`
      type SpecialRule implements Node @infer {
        fileName: String @proxy(from: "fileInfo.name")
      }

      type Weapon implements Node @infer {
        fileName: String @proxy(from: "fileInfo.name")
      }

      type Unit implements Node @infer {
        fileName: String @proxy(from: "fileInfo.name")
      }

      type Force implements Node @infer {
        fileName: String @proxy(from: "fileInfo.name")
      }
    `);
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  });
};
