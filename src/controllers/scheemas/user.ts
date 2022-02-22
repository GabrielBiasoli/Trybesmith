import joi from 'joi';

export const newUserScheema = {
  username: joi.string().min(3).required(),
  classe: joi.string().min(3).required(),
  level: joi.number().greater(0).required(),
  password: joi.string().min(8).required(),
};

export const userLoginScheema = {
  username: joi.required(),
  password: joi.required(),
};
