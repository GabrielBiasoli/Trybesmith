import { Router, Request, Response } from 'express';
import * as usersService from '../services/userService';

const route = Router();

route.post('/users', async (req: Request, res: Response) => {
  
});

export default route;