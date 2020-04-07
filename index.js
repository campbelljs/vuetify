module.exports = {
  install() {
    let vuetifyOpts = {};
    function configureNuxt(cfg) {
      // add @nuxtjs/vuetify
      if (!cfg.buildModules) cfg.buildModules = ["@nuxtjs/vuetify"];
      else cfg.buildModules.push("@nuxtjs/vuetify");

      this.$emit("client.nuxt.vuetify.configure", vuetifyOpts);
      cfg.vuetify = vuetifyOpts;
    }

    this.$on("client.nuxt.configure", configureNuxt);
  }
};
