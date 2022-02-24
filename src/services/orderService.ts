import { Order, OrderProducts } from '../interfaces/Order';
import * as productService from './productService';
import * as orderModel from '../models/orderModel';

const ORDER_NOT_FOUND: Error = new Error('ORDER_NOT_FOUND');

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
 
export const getById = async (id: string) => {
  const order = await orderModel.getById(id);
  if (!order) { throw ORDER_NOT_FOUND; }

  const products = await productService.getByOrderId(id);
  
  order.products = products;
  return order;
};

export const getAll = async () => {
  const orders = await orderModel.getAll();

  const prodIdsPromises = orders.reduce((acc: Promise<number[]>[], curr: Order) => {
    const prodIdsPromise = productService.getByOrderId(curr.id); 
    return [...acc, prodIdsPromise];
  }, []);
  
  const newProdIds = await Promise.all(prodIdsPromises);
  
  const newOrders = orders.map((order, i) => ({ ...order, products: newProdIds[i] }));

  return newOrders;
}; 

export default create;