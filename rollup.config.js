import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

export default {
  input: "src/toast.js",
  output: {
    file: "dist/toast.min.js",
    format: "cjs",
    name: "toast"
  },
  plugins: [postcss({ plugins: [autoprefixer, cssnano] }), babel({ exclude: "node_modules/**" }), uglify()]
};
