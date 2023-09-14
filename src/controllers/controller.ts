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

export async function updateGameController(req: Request, res: Response) {
  const gameId = parseInt(req.params.id);
  const updatedGame = req.body as Game;
  
  try {
    const game = await gamesService.updateGame(gameId, updatedGame);
    if (game === null) {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    res.send(game);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function deleteGameController(req: Request, res: Response) {
  const gameId = parseInt(req.params.id);
  
  try {
    const success = await gamesService.deleteGame(gameId);
    if (!success) {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    res.sendStatus(httpStatus.NO_CONTENT);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
