import { Request, Response, NextFunction } from 'express';
import rescue from 'express-rescue';
import validate from './middlewares/validateBody';
import StatusCode from '../enums';
import { NewProduct } from '../interfaces/Product';
import * as productSchemas from '../schemas/product';
import * as productService from '../services/productService';

const create = rescue(async (req: Request, res: Response, _next: NextFunction) => {
  validate<NewProduct>(productSchemas.newProductSchema, req.body);

  const newProduct = await productService.create(req.body);

  res.status(StatusCode.CREATED).json(newProduct);
});

const getAll = rescue(async (_req: Request, res: Response, _next: NextFunction) => {
  const products = await productService.getAll();
  
  res.status(StatusCode.OK).json(products);
});

export {
  create,
  getAll,
};