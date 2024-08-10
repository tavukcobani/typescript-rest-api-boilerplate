import { Router } from "express";

const router = Router();

router.get("/ping", async (req, res) => {
  return res.send("pong");
});

export default router;
