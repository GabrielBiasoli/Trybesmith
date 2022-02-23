import joi from 'joi';

export const newUserScheema = joi.object({
  username: joi.string().min(3).required().messages({
    'any.required': 'Username is required',
    'string.base': 'Username must be a string',
    'string.min': 'Username must be longer than 2 characters',
  }),
  classe: joi.string().min(3).required().messages({
    'any.required': 'Classe is required',
    'string.base': 'Classe must be a string',
    'string.min': 'Classe must be longer than 2 characters',
  }),
  level: joi.number().greater(0).required()
    .messages({
      'any.required': 'Level is required',
      'number.base': 'Level must be a number',
      'number.greater': 'Level must be greater than 0',
    }),
  password: joi.string().min(8).required().messages({
    'any.required': 'Password is required',
    'string.base': 'Password must be a string',
    'string.min': 'Password must be longer than 7 characters',
  }),
});

export const userLoginScheema = {
  username: joi.required(),
  password: joi.required(),
};
