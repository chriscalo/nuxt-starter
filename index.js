import express from "express";
import { start } from "express-start";

import nuxtServer from "./nuxt";

export const server = express();
server.enable("trust proxy");

server.use(
  // NOTE: nuxtServer handles all requests that come to it
  nuxtServer,
);

if (process.mainModule === module) {
  start(server);
}
