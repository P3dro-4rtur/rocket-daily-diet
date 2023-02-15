module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["babel-plugin-styled-components"],
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "~": "./src",
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@config": "./src/config",
            "@routes": "./src/routes",
            "@screens": "./src/screens",
          },
        },
      ],
    ],
  };
};
