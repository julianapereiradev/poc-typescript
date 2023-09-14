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
  if (!existingGame) {
    return null; // Jogo não encontrado
  }

  // Atualize os campos do jogo existente com os valores de updatedGame
  existingGame.title = updatedGame.title;
  existingGame.platform = updatedGame.platform;

  return await gamesRepository.updateGame(existingGame);
}

async function deleteGame(gameId: number): Promise<boolean> {
  const existingGame = await gamesRepository.getGameById(gameId);
  if (!existingGame) {
    return false; // Jogo não encontrado
  }

  return await gamesRepository.deleteGame(gameId);
}


const gamesService = {
  getGames,
  postGames,
  updateGame,
  deleteGame
};


export default gamesService;