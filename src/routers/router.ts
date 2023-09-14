import { Router } from "express";
import * as controller from "../controllers/controller";

const router = Router();
router.get("/games", controller.getGamesController)


export default router;