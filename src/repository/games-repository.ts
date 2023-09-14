import { db } from "@/database/database";
import { Game, CreateGame } from "@/protocols/game-protocol";

async function getGames() {
  const resultGetGames = await db.query<Game[]>(`SELECT * FROM games`);
  return resultGetGames.rows;
}

async function postGame(game: CreateGame) {
  const resultPostGames = await db.query<CreateGame>(
    `
    INSERT INTO games (title, platform)
    VALUES ($1,$2)
    `,
    [game.title, game.platform]
  );
  return resultPostGames.rows[0];
}

async function findRepeatedGame(game: CreateGame) {
  return await db.query<Game>(`SELECT * FROM games WHERE title=$1 AND platform=$2`, [game.title, game.platform]);
}

const gamesRepository = {
  getGames,
  postGame,
  findRepeatedGame
};

export default gamesRepository;
