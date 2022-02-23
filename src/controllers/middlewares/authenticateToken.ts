import { NextFunction, Request, Response } from 'express';
import jwt, { SignOptions } from 'jsonwebtoken';
import rescue from 'express-rescue';
import { UserLogged } from '../../interfaces/User';
import * as usersService from '../../services/userService';

const TOKEN_NOT_FOUND: Error = new Error('TOKEN_NOT_FOUND');
const INVALID_TOKEN: Error = new Error('INVALID_TOKEN');

const authenticateToken = rescue(async (req: Request, _res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    throw TOKEN_NOT_FOUND; 
  }

  const jwtConfig: SignOptions = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const token = req.headers.authorization;

  try {
    await jwt.verify(token, 'secret', jwtConfig) as any;
  } catch (error) {
    throw INVALID_TOKEN;
  }

  next();
});

export default authenticateToken;