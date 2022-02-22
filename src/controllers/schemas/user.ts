import joi from 'joi';

export const newUserScheema = joi.object({
  username: joi.string().min(2).required(),
  classe: joi.string().min(2).required(),
  level: joi.number().greater(0).required(),
  password: joi.string().min(8).required(),
});

export const userLoginScheema = {
  username: joi.required(),
  password: joi.required(),
};
