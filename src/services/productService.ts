import { NewProduct, ProductOrder } from '../interfaces/Product';
import * as productModel from '../models/productModel';

const create = async ({ name, amount }: NewProduct) => {
  const newProd = await productModel.create({ name, amount });
  console.log(newProd);
  
  return newProd;
};

const getAll = async () => {
  const products = await productModel.getAll();

  return products;
};

const update = async ({ productId, orderId }: ProductOrder) => {
  await productModel.update({ productId, orderId });
};

export {
  create,
  getAll,
  update,
};