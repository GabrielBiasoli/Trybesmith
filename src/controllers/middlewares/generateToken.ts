import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import StatusCode from '../enums';

const generateToken = (req: Request, res: Response, _next: NextFunction) => {
  const { newUser } = req.body;

  const token = jwt.sign(newUser, 'secret');

  res.status(StatusCode.CREATED).json({ token });
};

export default generateToken;