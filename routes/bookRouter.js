import { Router } from "express";
import { getBook } from "../controllers/bookController.js";

const bookRouter = Router();

bookRouter.get("/book/:id", getBook);

export default bookRouter;
