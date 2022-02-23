import { NextFunction, Response } from 'express';
import jwt, { SignOptions } from 'jsonwebtoken';
import rescue from 'express-rescue';
import { UserLogged, NewRequest } from '../../interfaces/User';

const TOKEN_NOT_FOUND: Error = new Error('TOKEN_NOT_FOUND');
const INVALID_TOKEN: Error = new Error('INVALID_TOKEN');

const authenticateToken = rescue(async (req: NewRequest, _res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    throw TOKEN_NOT_FOUND; 
  }

  const jwtConfig: SignOptions = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const token = req.headers.authorization;

  try {
    const user = jwt.verify(token, 'secret', jwtConfig) as UserLogged;
    req.user = user;
  } catch (error) {
    throw INVALID_TOKEN;
  }
  
  next();
});

export default authenticateToken;