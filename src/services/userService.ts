import { NewUser } from '../interfaces/User';
import * as usersModel from '../models/usersModel';

export const create = async ({ username, classe, level, password }: NewUser) => {
  const newUser = await usersModel.create({ username, classe, level, password });
  return newUser;
};

export default create;