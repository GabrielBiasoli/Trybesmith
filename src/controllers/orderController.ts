import { Response, NextFunction } from 'express';
import rescue from 'express-rescue';
import validateBody from './middlewares/validateBody';
import * as orderService from '../services/orderService';
import * as orderSchemas from '../schemas/order';
import { OrderProducts } from '../interfaces/Order';
import { NewRequest } from '../interfaces/User';
import StatusCode from '../enums';

export const create = rescue(async (req: NewRequest, res: Response, _next: NextFunction) => {
  validateBody<OrderProducts>(orderSchemas.newOrderSchema, req.body);

  const order = await orderService.create({ ...req.body, ...req.user });

  res.status(StatusCode.CREATED).json(order);
});

export const getById = rescue(async (req: NewRequest, res: Response, _next: NextFunction) => {
  const { id } = req.params;

  const order = await orderService.getById(id);

  res.status(StatusCode.OK).json(order);
});

export const getAll = rescue(async (req: NewRequest, res: Response, _next: NextFunction) => {
  const orders = await orderService.getAll();
  
  res.status(StatusCode.OK).json(orders);
});

export default create;