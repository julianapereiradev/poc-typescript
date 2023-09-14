import { Request, Response } from "express";
import gamesService from "@/service/games-service"
import httpStatus from "http-status";
import { Game } from "@/protocols/game-protocol";

export async function getGamesController(req: Request, res: Response) {
  const games = await gamesService.getGames();
  res.send(games);
}

export async function postGamesController(req: Request, res: Response) {
  const body = req.body as Game;
  
  const game = await gamesService.postGames(body);

  if (game  === null) {
    return res.sendStatus(httpStatus.BAD_REQUEST)
  }
  
  res.sendStatus(httpStatus.CREATED);
}