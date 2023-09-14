import { db } from "@/database/database";
import { Game } from "@/protocols/game-protocol";

async function getGames() {
  const resultGetGames = await db.query<Game[]>(`SELECT * FROM games`);
  return resultGetGames.rows;
}


const gamesRepository = {
  getGames,
};

export default gamesRepository;
