import { NextFunction, Request, Response } from 'express';
import joi from 'joi';
import StatusCode from '../../enums';

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
  
  const { type } = err.details[0];
  const { message } = err;
    
  const statusCode = type === 'any.required' ? StatusCode.BAD_REQUEST 
    : StatusCode.UNPROCESSABLE_ENTITY;

  res.status(statusCode).json({ error: `${message}` });
};

export default joiError;