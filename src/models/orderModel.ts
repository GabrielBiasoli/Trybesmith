import { ResultSetHeader } from 'mysql2';
import connection from './connection';

export const create = async ({ userId }: { userId: number }) => {
  const [newOrder] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.Orders (userId)
    VALUES (?)`,
    [userId],
  );

  return newOrder.insertId;
};

export default create;