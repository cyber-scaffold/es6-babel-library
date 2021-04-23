/* eslint-disable */
const path=require("path");
const basic_babel_config=require("@cyber-tools/preset-babel-option");

basic_babel_config.plugins.push([
  require.resolve("babel-plugin-module-resolver"),{
    baseUrl:__dirname,
    root: [path.resolve(__dirname,"./src/")],
    alias: {
      "@": "./src/",
      "@@":"./"
    }
  }
]);

module.exports=basic_babel_config;