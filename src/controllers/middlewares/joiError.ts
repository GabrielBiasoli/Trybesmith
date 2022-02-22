import { NextFunction, Request, Response } from 'express';
import joi from 'joi';

interface JoiError {
  details: [
    { 
      type: string,
      message: string
    },
  ],
  message: string
}

const joiError = (err: JoiError, req: Request, res: Response, next: NextFunction) => {
  if (!joi.isError(err)) return next(err); 
  
  console.log(err);
  const { type, message } = err.details[0];

  const statusCode = type === 'any.required' ? 400 : 422;

  res.status(statusCode).json({ message });
};

export default joiError;