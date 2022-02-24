import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { Order } from '../interfaces/Order';

export const create = async ({ userId }: { userId: number }) => {
  const [newOrder] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.Orders (userId)
    VALUES (?)`,
    [userId],
  );

  return newOrder.insertId;
};

export const getById = async (id: string) => {
  const [[order]] = await connection.execute<RowDataPacket[]>(
    `SELECT * FROM Trybesmith.Orders
      WHERE id = ?`,
    [id],
  ); 

  return order;
};

export const getAll = async () => {
  const [orders] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.Orders',
  );

  return orders as Order[];
};
