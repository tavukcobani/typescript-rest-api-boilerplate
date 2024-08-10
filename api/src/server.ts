import "reflect-metadata";
import express from "express";
import { RegisterRoutes } from "./routes/routes";
export const app = express();

import routes from "./routes/index";
app.use("/", routes);
app.use(express.static(".build"));

import cors from "cors";
app.use(cors());

RegisterRoutes(app);

//Middlewares
import { errorHandlerMiddleware } from "./middlewares/errorHandler.middleware";
app.use(errorHandlerMiddleware);

/** swagger */
import swaggerUi from "swagger-ui-express";
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  }),
);

// Database initialization example for Postgresql
//import { initializeDatabase } from '../../database/postgresql.datasource';
//initializeDatabase();

import http from "http";
const httpServer = http.createServer(app);

import config from "../../config";
httpServer.listen(config.server.port, () => {
  console.log(
    `Server is running on http://${config.server.hostname}:${config.server.port}`,
  );
});
