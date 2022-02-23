import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';
import rescue from 'express-rescue';

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
    jwt.verify(token, 'secret', jwtConfig) as JwtPayload;
  } catch (error) {
    throw INVALID_TOKEN;
  }

  next();
});

export default authenticateToken;