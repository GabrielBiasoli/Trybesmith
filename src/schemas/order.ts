import joi from 'joi';

const orderProductsMessages = {
  'any.required': 'Products is required',
  'array.base': 'Products must be an array of numbers',
  'array.min': 'Products can\'t be empty',
};

export const newOrderSchema = joi.object({
  products: joi.array().min(1).items(joi.number()).required()
    .messages(orderProductsMessages),
});

export default newOrderSchema;