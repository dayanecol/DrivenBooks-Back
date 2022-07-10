import { Router } from "express";
import { postCheckout } from "../controllers/checkoutController.js";
import validateCheckoutPost from "../middlewares/validateCheckoutMiddleware.js";
import validateToken from "../middlewares/validateTokenMiddleware.js";

const checkoutRouter = Router();

checkoutRouter.post(
  "/checkout",
  validateToken,
  validateCheckoutPost,
  postCheckout
);

export default checkoutRouter;
