import { NewProduct, ProductOrder } from '../interfaces/Product';
import * as productModel from '../models/productModel';

const create = async ({ name, amount }: NewProduct) => {
  const newProd = await productModel.create({ name, amount });
  
  return newProd;
};

const getAll = async () => {
  const products = await productModel.getAll();

  return products;
};

const update = async ({ productId, orderId }: ProductOrder) => {
  await productModel.update({ productId, orderId });
};

const getByOrderId = async (orderId: string) => {
  const products = await productModel.getByOrderId(orderId);

  return products;
};

export {
  create,
  getAll,
  update,
  getByOrderId,
};