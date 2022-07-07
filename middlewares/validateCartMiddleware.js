import { cartSchema } from "../schemas/cartSchema.js";

export default function validateCartPost(req, res, next) {
  const validation = cartSchema.validate(req.body, { abortEarly: false });
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
