import { Request, Response, NextFunction } from 'express';
import rescue from 'express-rescue';
import validate from './middlewares/validateBody';
import StatusCode from './enums';
import { NewProduct } from '../interfaces/Product';
import newProductSchema from './schemas/product';
import * as productService from '../services/productService';

const create = rescue(async (req: Request, res: Response, _next: NextFunction) => {
  validate<NewProduct>(newProductSchema, req.body);

  const newProduct = await productService.create(req.body);

  res.status(StatusCode.CREATED).json(newProduct);
});