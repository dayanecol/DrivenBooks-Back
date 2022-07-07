import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRouter from "./routes/authRouter.js";
import productsRouter from "./routes/productsRouter.js";
import bookRouter from "./routes/bookRouter.js";

const app = express();
app.use(json());
app.use(cors());
dotenv.config();

app.use(authRouter);
app.use(productsRouter);
app.use(bookRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor funcionando na porta ${PORT}!`);
});
