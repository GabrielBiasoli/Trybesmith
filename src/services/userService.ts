import { NewUser, UserLogin } from '../interfaces/User';
import * as usersModel from '../models/usersModel';

export const create = async ({ username, classe, level, password }: NewUser) => {
  const newUser = await usersModel.create({ username, classe, level, password });
  return newUser;
};

export const login = async ({ username, password }: UserLogin) => {
  const user = await usersModel.
};

export default create;