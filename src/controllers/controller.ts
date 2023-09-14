import { Request, Response } from "express";
import gamesService from "../service/games-service"

export async function getGamesController(req: Request, res: Response) {
  const games = await gamesService.getGames();
  res.send(games);
}