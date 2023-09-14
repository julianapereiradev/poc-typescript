import { Router } from "express";
import * as controller from "../controllers/controller";

const gamesRouter = Router();
gamesRouter.get("/games", controller.getGamesController)


export default gamesRouter;