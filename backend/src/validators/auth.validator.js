import Joi from "joi";

const userAddValidator = Joi.object({
  username: Joi.string().trim().min(2).required(),
  email: Joi.string().trim().email().required(),
  password: Joi.string().min(2).required(),
});

export { userAddValidator };
