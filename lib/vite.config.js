import { resolve } from "path";
export default {
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "Plunk",
      fileName: "plunk",
    },
  },
};

// 1. 使用者用 native ecmascript 導入我們的包 => plunk.js
// 2. 使用者使用 function require 來導入我們的包 =>　plunk.umd.cjs
