import { Response, Request, NextFunction } from 'express';
import rescue from 'express-rescue';
import validateBody from './middlewares/validateBody';
import * as orderSchemas from './schemas/order';

export type OrderProducts = number[];

const create = rescue(async (req: Request, res: Response, next: NextFunction) => {
  validateBody<OrderProducts>(orderSchemas.newOrderSchema, req.body);
});