const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/vuetest2",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/all.scss";`,
      },
    },
  },
});
