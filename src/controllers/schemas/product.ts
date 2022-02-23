import joi from 'joi';

const prodNameMessage = {
  'any.required': 'Name is required',
  'string.base': 'Name must be a string',
  'string.min': 'Name must be longer than 2 characters',
};

const prodAmountMessages = {
  'any.required': 'Amount is required',
  'string.base': 'Amount must be a string',
  'string.min': 'Amount must be longer than 2 characters',
};

export const newProductSchema = joi.object({
  name: joi.string().min(3).required().messages(prodNameMessage),
  amount: joi.string().min(3).required().messages(prodAmountMessages),
});

export default newProductSchema;