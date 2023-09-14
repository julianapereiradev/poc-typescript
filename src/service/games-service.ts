import gamesRepository from "../repository/games-repository";
import { Game } from "./../protocols/game-protocol";

async function getGames() {
  return await gamesRepository.getGames();
}


const gamesService = {
  getGames,
};


export default gamesService;