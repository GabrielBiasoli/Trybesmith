import { NewProduct, ProductOrder } from '../interfaces/Product';
import * as productModel from '../models/productModel';

export const create = async ({ name, amount }: NewProduct) => {
  const newProd = await productModel.create({ name, amount });
  
  return newProd;
};

export const getAll = async () => {
  const products = await productModel.getAll();

  return products;
};

export const update = async ({ productId, orderId }: ProductOrder) => {
  await productModel.update({ productId, orderId });
};

export const getByOrderId = async (orderId: string) => {
  const products = await productModel.getByOrderId(orderId);

  return products;
};
