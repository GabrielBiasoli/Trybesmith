import { NextFunction, Request, Response } from 'express';
import StatusCode from '../../enums';

const serverError = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.log(err);
  res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' });
};

export default serverError;