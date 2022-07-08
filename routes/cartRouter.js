import { Router } from "express";
import validateToken from "../middlewares/validateTokenMiddleware.js";
import validateCartPost from "../middlewares/validateCartMiddleware.js";
import { deleteCart, postCart } from "../controllers/cartController.js";
import { openCart } from "../controllers/cartController.js";

const cartRouter = Router();

cartRouter.get("/cart", validateToken, openCart);

cartRouter.post("/cart", validateToken, validateCartPost, postCart);

cartRouter.delete("/cart", validateToken, deleteCart);

export default cartRouter;
