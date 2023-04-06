import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";

const input = "index.js";
const defaultPlugins = [
  babel({
    babelrc: false,
    presets: [["@babel/env", { modules: false }]],
  }),
];

export default [
  {
    input,
    plugins: [].concat(defaultPlugins, [commonjs()]),
    output: {
      file: "dist/hg-brasil.js",
      format: "umd",
      name: "fipe",
      globals: {
        axios: "axios",
      },
    },
    external: ["axios"],
  },
  {
    input,
    plugins: [].concat(defaultPlugins, [
      resolve({
        browser: true,
      }),
      commonjs(),
    ]),
    context: "window",
    output: {
      file: "dist/hg-brasil-browser.js",
      format: "umd",
      name: "hg-brasil",
      globals: {
        axios: "axios",
      },
    },
    external: ["axios"],
  },
];
