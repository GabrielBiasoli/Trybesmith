import { NextFunction, Request, Response } from 'express';
// import StatusCode from '../enums';

interface DomainError {
  message: string,
  statusCode: number
}

const domainError = (err: DomainError, req: Request, res: Response, next: NextFunction) => {
  if (!err.message) return next(err);

  const { statusCode, message } = err;

  res.status(statusCode).json({ message });
};

export default domainError;