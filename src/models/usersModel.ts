import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { NewUser, UserLogged, UserLogin } from '../interfaces/User';
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

export const login = async ({ username, password }: UserLogin) => {
  const [[user]] = await connection.execute<RowDataPacket[]>(
    `SELECT id, username FROM Trybesmith.Users
     WHERE username = ? and password = ?`,
    [username, password],
  );

  return user;
};

export const validateUser = async ({ username, id }: UserLogged) => {
  const [[user]] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.Users WHERE id = ? and username = ?',
    [id, username],
  );

  return user;
};

export default create;