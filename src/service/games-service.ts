import gamesRepository from "@/repository/games-repository";
import { Game } from "@/protocols/game-protocol";
import { errors } from "@/errors/erros";


async function getGames() {
  return await gamesRepository.getGames();
}

async function postGames(game: Game) {
  const existGame = await gamesRepository.findRepeatedGame(game);
  if (existGame.rowCount > 0) throw errors.conflictError('O nome do jogo');
  
  return await gamesRepository.postGame(game);
}


async function updateGame(gameId: number, updatedGame: Game): Promise<Game | null> {
  const existingGame = await gamesRepository.getGameById(gameId);
  if (!existingGame) throw errors.notFound('O nome do jogo');

  existingGame.title = updatedGame.title;
  existingGame.platform = updatedGame.platform;

  return await gamesRepository.updateGame(existingGame);
}

async function deleteGame(gameId: number): Promise<boolean> {
  const existingGame = await gamesRepository.getGameById(gameId);
  if (!existingGame) throw errors.notFound('O nome do jogo');

  return await gamesRepository.deleteGame(gameId);
}


const gamesService = {
  getGames,
  postGames,
  updateGame,
  deleteGame
};


export default gamesService;