import { Router } from "express";
import * as controller from "@/controllers/controller";
import { validationschema } from "@/middlewares/validation-schema";
import { gameSchema } from "@/schemas/games-schema";

const gamesRouter = Router();
gamesRouter.get("/games", controller.getGamesController)
gamesRouter.post("/games", validationschema(gameSchema), controller.postGamesController)

export default gamesRouter;