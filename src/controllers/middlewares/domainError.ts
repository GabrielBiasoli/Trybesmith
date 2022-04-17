import { NextFunction, Request, Response } from 'express';
import StatusCode from '../../enums';

interface ErrorMap {
  INVALID_USER: [number, string]
  TOKEN_NOT_FOUND: [number, string],
  INVALID_TOKEN: [number, string],
  ORDER_NOT_FOUND: [number, string],
}

const errorMap: ErrorMap = {
  INVALID_USER: [StatusCode.UNAUTHORIZED, 'Username or password invalid'],
  TOKEN_NOT_FOUND: [StatusCode.UNAUTHORIZED, 'Token not found'],
  INVALID_TOKEN: [StatusCode.UNAUTHORIZED, 'Invalid token'],
  ORDER_NOT_FOUND: [StatusCode.NOT_FOUND, 'Order not found'],
};

const domainError = (err: Error, _req: Request, res: Response, next: NextFunction) => {
  if (!err.message) return next(err);

  const [statusCode, message] = errorMap[err.message as keyof typeof errorMap]; // Source: https://stackoverflow.com/questions/36316326/typescript-ts7015-error-when-accessing-an-enum-using-a-string-type-parameter

  res.status(statusCode).json({ error: message });
};

export default domainError;