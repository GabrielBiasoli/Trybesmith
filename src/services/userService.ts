import { NewUser } from '../interfaces/User';
import * as usersModel from '../models/usersModel';

export const create = async ({ username, classe, level, password }: NewUser) => {
  await usersModel.create({ username, classe, level, password });
};

export default create;