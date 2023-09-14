import express, { json } from "express";
import "express-async-errors";
import router from "@/routers/router";
import dotenv from "dotenv";
import errorHandler from "@/middlewares/erros-middlewares";

dotenv.config();

const app = express();
app.use(json());

app.use(router);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));