import { Router } from "express";
import validateToken from "../middlewares/validateTokenMiddleware.js";
import validateCartPost from "../middlewares/validateCartMiddleware.js";
import {
  deleteCart,
  postCart,
  deleteAll,
  openCart,
} from "../controllers/cartController.js";

const cartRouter = Router();

cartRouter.get("/cart", validateToken, openCart);

cartRouter.post("/cart", validateToken, validateCartPost, postCart);

cartRouter.delete("/cart/id/:cartId", validateToken, deleteCart);

cartRouter.delete("/cart/deleteAll", validateToken, deleteAll);

export default cartRouter;
