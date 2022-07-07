import { Router } from "express";
import validateToken from "../middlewares/validateTokenMiddleware.js";
import validateCartPost from "../middlewares/validateCartMiddleware.js";
import { postCart } from "../controllers/cartController.js";
import express from "express";
import { openCart } from "../controllers/cartController.js";

const cartRouter = express.Router();

cartRouter.get("/cart", validateToken, openCart);

cartRouter.post("/cart", validateToken, validateCartPost, postCart);

export default cartRouter;
