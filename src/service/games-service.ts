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


const gamesService = {
  getGames,
  postGames
};


export default gamesService;