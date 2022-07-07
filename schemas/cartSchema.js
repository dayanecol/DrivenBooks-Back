import joi from "joi";

export const cartSchema = joi.object({
  id: joi.number().required(),
  email: joi.string().email().required(),
});
