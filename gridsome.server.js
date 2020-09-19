const CustomMdSource = require('./plugins/CustomMdSource');

module.exports = function (api) {
  new CustomMdSource(api, {
    baseDir: 'data',
    path: 'army_lists/*.md',
    typeName: 'Army',
    index: [],
    refs: {
      forces: 'Force',
    },
  });
  new CustomMdSource(api, {
    baseDir: 'data',
    path: 'forces/*.md',
    typeName: 'Force',
    index: [],
    refs: {
      units: 'Unit',
      special_rules: 'SpecialRule',
    },
  });
  new CustomMdSource(api, {
    baseDir: 'data',
    path: 'special_rules/*.md',
    typeName: 'SpecialRule',
    index: [],
  });
  new CustomMdSource(api, {
    baseDir: 'data',
    path: 'units/*.md',
    typeName: 'Unit',
    index: [],
    refs: {
      special_rules: 'SpecialRule',
    },
    schemaTypes: [
      {
        name: 'UnitWeapons',
        fields: {
          id: 'String',
          multiplier: 'String',
          arc: 'String',
          data: 'Weapon',
        },
      },
    ],
    resolvers: {
      Unit: {
        weapons: {
          type: '[UnitWeapons]',
          resolve(obj) {
            return (
              obj &&
              obj.weapons &&
              obj.weapons.map((weapon) => ({
                ...weapon,
                data: weapon.id,
              }))
            );
          },
        },
      },
    },
  });
  new CustomMdSource(api, {
    baseDir: 'data',
    path: 'weapons/*.md',
    typeName: 'Weapon',
    index: [],
    schemaTypes: [
      {
        name: 'WeaponModes',
        fields: {
          range: 'String',
          firepower: 'String',
          specialRules: '[SpecialRule]',
          boolean: 'String',
        },
      },
    ],
    resolvers: {
      Weapon: {
        modes: {
          type: '[WeaponModes]',
          resolve(obj) {
            return (
              obj &&
              obj.modes &&
              obj.modes.map((mode) => ({
                ...mode,
                specialRules: mode.special_rules,
              }))
            );
          },
        },
      },
    },
  });
};
