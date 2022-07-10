import joi from "joi";

export const checkoutSchema = joi.object({
  name: joi.required(),
  email: joi.string().email().required(),
  cpf: joi.required(),
  payment: joi.required(),
  address: joi.required(),
  products: joi.required(),
});
