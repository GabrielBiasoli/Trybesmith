import { NewUser } from '../interfaces/User';
import connection from './connection';

export const create = async ({ username, classe, level, password }: NewUser) => {
  await connection.execute(
    `INSERT INTO Trybesmith.Users (username, classe, level, password)
      VALUES (?, ?, ?, ?)`,
    [username, classe, level, password],
  );
};

export default create;