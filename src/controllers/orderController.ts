import { Response, NextFunction } from 'express';
import rescue from 'express-rescue';
import validateBody from './middlewares/validateBody';
import * as orderSchemas from './schemas/order';
import { OrderProducts } from '../interfaces/Order';
import * as orderService from '../services/orderService';
import { NewRequest } from '../interfaces/User';
import StatusCode from './enums';

export const create = rescue(async (req: NewRequest, res: Response, _next: NextFunction) => {
  validateBody<OrderProducts>(orderSchemas.newOrderSchema, req.body);

  const order = await orderService.create({ ...req.body, ...req.user });

  res.status(StatusCode.CREATED).json(order);
});

export default create;