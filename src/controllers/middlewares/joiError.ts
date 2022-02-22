import { NextFunction, Request, Response } from 'express';
import joi from 'joi';

interface JoiError {
  details: [
    { type: string },
  ],
  message: string
}

const joiError = (err: JoiError, req: Request, res: Response, next: NextFunction) => {
  if (!joi.isError(err)) return next(err); 

  const errorType = err.details[0].type;

  const statusCode = errorType === 'any.required' ? 400 : 422;

  res.status(statusCode).json({ message: err.message });
};

export default joiError;