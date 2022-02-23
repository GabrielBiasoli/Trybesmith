import { NextFunction, Request, Response } from 'express';
import jwt, { SignOptions } from 'jsonwebtoken';
import { UserLogged } from '../../interfaces/User';

const generateToken = (req: Request, res: Response, _next: NextFunction) => {
  const { user, statusCode }: { user: UserLogged, statusCode: number } = req.body;

  const jwtConfig: SignOptions = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const token = jwt.sign(user, 'secret', jwtConfig);

  res.status(statusCode).json({ token });
};

export default generateToken;