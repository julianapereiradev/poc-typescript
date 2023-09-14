import gamesRepository from "@/repository/games-repository";
import { Game } from "@/protocols/game-protocol";

async function getGames() {
  return await gamesRepository.getGames();
}

async function postGames(game: Game) {
  return await gamesRepository.postGame(game);
}


const gamesService = {
  getGames,
  postGames
};


export default gamesService;