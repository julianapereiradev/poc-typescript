import express, { json } from "express";
import router from "./routers/router";

const app = express();
app.use(json());

app.use(router);

app.listen(5000, () => console.log(`Server is up and running or port 5000`));