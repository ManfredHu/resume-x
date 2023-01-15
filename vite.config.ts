import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueTypeImports from "vite-plugin-vue-type-imports";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://stackoverflow.com/a/73215718
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            return tag.startsWith("ion-"); // (return true)
          },
        },
      },
    }),
    // https://github.com/vuejs/core/issues/4294#issuecomment-984033739
    VueTypeImports(),
  ],
  server: {
    port: 9111,
    open: "/en",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    //   preprocessorOptions: {
    //     less: {
    //       // modifyVars: {
    //       //   // reference:  避免重复引用
    //       //   hack: `true; @import (reference) "${path.resolve('src/style/base/import.variables.less')}";`
    //       // },
    //       javascriptEnabled: true // 允许less执行js
    //     }
    //   }
  },
});
