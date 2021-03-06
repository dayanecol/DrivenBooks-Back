import { Router } from "express";
import {
  getProducts,
  postProducts,
} from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get("/products/:type", getProducts);
productsRouter.post("/products", postProducts);

export default productsRouter;
