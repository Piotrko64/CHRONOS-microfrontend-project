const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    configureWebpack: {
        output: {
            libraryTarget: "system",
        },
    },
    transpileDependencies: true,
});
