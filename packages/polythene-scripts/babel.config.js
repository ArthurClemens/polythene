module.exports = function (api) {
  const presets = [
    "@babel/env",
    "@babel/preset-typescript",
    "minify",
  ];
  const plugins = [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
  ];

  api.cache(false);

  return {
    presets,
    plugins,
    "comments": false,
  };
};
