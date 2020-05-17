const { SyncHook } = require("tapable");

module.exports = {
  name: "@campbell/vuetify",
  install(nuxtVuetifyOpts = {}) {
    this.registerHook(
      "ui:configure-nuxt:configure-vuetify",
      new SyncHook(["nuxtVuetifyOpts"])
    );

    function configureNuxt(cfg) {
      // add @nuxtjs/vuetify
      if (!cfg.buildModules) cfg.buildModules = [];
      cfg.buildModules.push("@nuxtjs/vuetify");

      this.hooks["ui:configure-nuxt:configure-vuetify"].call(nuxtVuetifyOpts);

      if (!cfg.vuetify) cfg.vuetify = {};
      Object.assign(cfg.vuetify, nuxtVuetifyOpts);
    }

    this.hooks["ui:configure-nuxt"].tap(
      "CampbellVuetify",
      configureNuxt.bind(this)
    );
  },
};
