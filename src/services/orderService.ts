import { OrderProducts } from '../interfaces/Order';
import * as productService from './productService';
import * as orderModel from '../models/orderModel';

export const create = async ({ products, id }: OrderProducts) => {
  const orderId = await orderModel.create({ userId: id });

  const updateProductsPromise = products.reduce((acc: Promise<void>[], productId: number) => {
    const updatedProductPromise = productService.update({ productId, orderId }); 
    return [...acc, updatedProductPromise];
  }, []);

  await Promise.all(updateProductsPromise);

  return {
    order: {
      userId: id,
      products,
    },
  };
};

export default create;