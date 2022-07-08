import { Router } from "express";
import { postCheckout } from "../controllers/checkoutController.js";

const checkoutRouter = Router();

checkoutRouter.post("/checkout", postCheckout);

export default checkoutRouter;