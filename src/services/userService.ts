import { NewUser, UserLogin } from '../interfaces/User';
import * as usersModel from '../models/usersModel';

const INVALID_USER: Error = new Error('INVALID_USER');

export const create = async ({ username, classe, level, password }: NewUser) => {
  const newUser = await usersModel.create({ username, classe, level, password });  
  return newUser;
};

export const login = async ({ username, password }: UserLogin) => {
  const user = await usersModel.login({ username, password });
  
  if (!user) throw INVALID_USER;

  return user;
};
