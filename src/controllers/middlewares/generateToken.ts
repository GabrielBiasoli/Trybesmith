import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const generateToken = (req: Request, res: Response, _next: NextFunction) => {
  const { user, statusCode } = req.body;

  const token = jwt.sign(user, 'secret');

  res.status(statusCode).json({ token });
};

export default generateToken;