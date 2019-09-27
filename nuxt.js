import { Nuxt, Builder } from "nuxt";
import express from "express";
import config from "~/nuxt.config.js";

export const server = express();
export default server;

const nuxt = new Nuxt(config);

// render Nuxt routes
server.use(nuxt.render);

// hot-reloading in dev
if (config.dev) {
  new Builder(nuxt).build();
}
