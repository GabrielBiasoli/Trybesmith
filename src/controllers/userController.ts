import { Request, Response, NextFunction } from 'express';
import rescue from 'express-rescue';
import * as usersService from '../services/userService';
import validate from './middlewares/validateBody';
import { newUserScheema, userLoginScheema } from './schemas/user';
import { NewUser, UserLogin } from '../interfaces/User';
import StatusCode from './enums';

export const create = rescue(async (req: Request, _res: Response, next: NextFunction) => {
  validate<NewUser>(newUserScheema, req.body);

  const newUser = await usersService.create(req.body);
  req.body.user = newUser;
  req.body.statusCode = StatusCode.CREATED;

  next();
});

export const login = rescue(async (req: Request, res: Response, next: NextFunction) => {
  validate<UserLogin>(userLoginScheema, req.body);

  const user = await usersService.login(req.body);
  req.body.user = user;
  req.body.statusCode = StatusCode.OK;

  next();
});
