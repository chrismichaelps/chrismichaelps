import { defineLayer } from "@effuse/core";
import {
  createRouter,
  createWebHistory,
  installRouter,
  type RouteRecord,
} from "@effuse/router";
import { HomePage } from "../pages/Home";
import { ResearchPage } from "../pages/Research";
import { ProjectsPage } from "../pages/Projects";
import { NotFoundPage } from "../pages/NotFound";
import { TechPage } from "../pages/Tech";
import { logger } from "../utils/logger";

const routes: RouteRecord[] = [
  { path: "/", name: "home", component: HomePage },
  { path: "/projects", name: "projects", component: ProjectsPage },
  { path: "/research", name: "research", component: ResearchPage },
  { path: "/tech", name: "tech", component: TechPage },
  { path: "*", name: "not-found", component: NotFoundPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export const RouterLayer = defineLayer({
  name: "router",
  dependencies: ["layout"],
  provides: {
    router: () => router,
  },
  onMount: () => {
    logger.info("RouterLayer mounted", { tag: "RouterLayer" });
  },
  setup: () => {
    installRouter(router);
    return () => {
      logger.info("RouterLayer cleanup", { tag: "RouterLayer" });
    };
  },
});
