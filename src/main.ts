import { createApp } from "@effuse/core";
import { App } from "./App";
import { RouterLayer, LayoutLayer, AppStateLayer } from "./layers";
import { themeStore } from "./store";
import { logger } from "./utils/logger";
import "./styles.css";

if (typeof window !== "undefined") {
  themeStore.initTheme();
}

createApp(App)
  .useLayers([LayoutLayer, AppStateLayer, RouterLayer])
  .then((app) => {
    app
      .mount("#app", {
        tracing: {
          enabled: import.meta.env.DEV,
          serviceName: "chrismichaelps",
          console: true,
          verbose: false,
          categories: {
            layers: true,
            router: true,
            components: false,
            effects: false,
            signals: false,
            suspense: true,
            emit: false,
            store: true,
            fibers: false,
            hooks: false,
          },
        },
      })
      .then(() => logger.info("App mounted", { tag: "App" }))
      .catch((err) => logger.error(err, { tag: "App" }));
  });
