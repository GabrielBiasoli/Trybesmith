import { ResultSetHeader } from 'mysql2';
import { NewUser } from '../interfaces/User';
import connection from './connection';

export const create = async ({ username, classe, level, password }: NewUser) => {
  const [user] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.Users (username, classe, level, password)
      VALUES (?, ?, ?, ?)`,
    [username, classe, level, password],
  );

  return {
    id: user.insertId,
    username,
  };
};

export default create;