import { Request, Response, NextFunction } from 'express';
import rescue from 'express-rescue';
import * as usersService from '../services/userService';
import validate from './middlewares/validateBody';
import { newUserScheema } from './scheemas/user';
import { NewUser } from '../interfaces/User';

export const create = rescue(async (req: Request, _res: Response, next: NextFunction) => {
  validate<NewUser>(newUserScheema, req.body);

  const newUser = await usersService.create(req.body);
  req.body.user = newUser;

  next();
});

export default create;