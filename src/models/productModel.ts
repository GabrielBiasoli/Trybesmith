import { ResultSetHeader } from 'mysql2';
import { NewProduct } from '../interfaces/Product';
import connection from './connection';

const create = async ({ amount, name }: NewProduct) => {
  const [newProd] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.Products (name, amount)
    VALUES (?, ?)`,
    [name, amount],
  );

  return {
    items: {
      id: newProd.insertId,
      name,
      amount,
    },
  };
};

const getAll = async () => {};

export {
  create,
  getAll,
};