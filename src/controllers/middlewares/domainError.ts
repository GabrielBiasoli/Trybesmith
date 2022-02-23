import { NextFunction, Request, Response } from 'express';
import StatusCode from '../enums';

interface ErrorMap {
  INVALID_USER: [number, string]
}

const errorMap: ErrorMap = {
  INVALID_USER: [StatusCode.UNAUTHORIZED, 'Username or password invalid'],
};

const domainError = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (!err.message) return next(err);

  const [statusCode, errorMessage] = errorMap[err.message as keyof typeof errorMap]; // Source: https://stackoverflow.com/questions/36316326/typescript-ts7015-error-when-accessing-an-enum-using-a-string-type-parameter

  res.status(statusCode).json({ error: errorMessage });
};

export default domainError;