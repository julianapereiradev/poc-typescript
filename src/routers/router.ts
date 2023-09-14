import { Router } from "express";

import gamesRouter from "./gamesRouter";

const router = Router();
router.use(gamesRouter)


export default router;