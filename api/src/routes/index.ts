import { Router } from "express";

const router = Router();

router.use((req, res, next) => {
  console.debug(`METHOD: [${req.method}], IP: [${req.socket.remoteAddress}] `);

  res.on("finish", () => {
    console.debug(
      `METHOD: [${req.method}], IP: [${req.socket.remoteAddress}], STATUS: [${res.statusCode}]`,
    );
  });

  next();
});

import bodyParser from "body-parser";
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

/** Routes */
import routes from "./app.routes";
router.use("/", routes);

export default router;
