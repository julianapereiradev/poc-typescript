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


async function getGameById(gameId: number): Promise<Game | null> {
  const result = await db.query<Game>("SELECT * FROM games WHERE id = $1", [gameId]);
  return result.rows[0] || null;
}

async function updateGame(game: Game): Promise<Game> {
  const result = await db.query<Game>(
    "UPDATE games SET title = $1, platform = $2 WHERE id = $3 RETURNING *",
    [game.title, game.platform, game.id]
  );
  return result.rows[0];
}

async function deleteGame(gameId: number): Promise<boolean> {
  const result = await db.query("DELETE FROM games WHERE id = $1", [gameId]);
  return result.rowCount > 0;
}

const gamesRepository = {
  getGames,
  postGame,
  findRepeatedGame,
  getGameById,
  updateGame,
  deleteGame
};

export default gamesRepository;
