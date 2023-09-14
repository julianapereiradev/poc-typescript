import { Router } from "express";
import * as controller from "@/controllers/controller";
import { validationschema } from "@/middlewares/validation-schema";
import { gameSchema } from "@/schemas/games-schema";

const gamesRouter = Router();
gamesRouter.get("/games", controller.getGamesController)
gamesRouter.post("/games", validationschema(gameSchema), controller.postGamesController)
gamesRouter.put("/games/:id", validationschema(gameSchema), controller.updateGameController);
gamesRouter.delete("/games/:id", controller.deleteGameController);


export default gamesRouter;