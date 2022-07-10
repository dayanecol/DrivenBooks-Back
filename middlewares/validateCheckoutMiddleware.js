import { checkoutSchema } from "../schemas/checkoutSchemas.js";

export default function validateCheckoutPost(req, res, next) {
  const validation = checkoutSchema.validate(req.body, { abortEarly: false });
  if (validation.error) {
    res.status(422).send(
      validation.error.details.map((detail) => {
        return detail.message;
      })
    );
    return;
  }
  next();
}
