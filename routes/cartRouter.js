import { Router } from "express";
import validateToken from "../middlewares/validateTokenMiddleware.js";
import validateCartPost from "../middlewares/validateCartMiddleware.js";
import { postCart } from "../controllers/cartController.js";

const cartRouter = Router();

cartRouter.post("/cart", validateToken, validateCartPost, postCart);

export default cartRouter;
