import express from "express";
import { openCart } from "../controllers/cartController";

const cartRouter = express.Router();

cartRouter.get("/cart", openCart);