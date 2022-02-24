import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { NewProduct, ProductOrder } from '../interfaces/Product';
import connection from './connection';

const create = async ({ amount, name }: NewProduct) => {
  const [newProd] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.Products (name, amount)
    VALUES (?, ?)`,
    [name, amount],
  );

  return {
    item: {
      id: newProd.insertId,
      name,
      amount,
    },
  };
};

const getAll = async () => {
  const [products] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.Products',
  );

  return products;
};

const update = async ({ productId, orderId }: ProductOrder) => {
  await connection.execute(
    'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
    [orderId, productId],
  );
};

// interface ProductId {
//   id: number,
// }

const toProductId = (products: RowDataPacket[]) => {
  const productsFormated = products
    .reduce((acc: number[], curr: RowDataPacket) => [...acc, curr.id], []);
  return productsFormated;
}; 

const getByOrderId = async (orderId: string) => {
  const [products] = await connection.execute<RowDataPacket[]>(
    'SELECT id FROM Trybesmith.Products WHERE orderId = ?',
    [orderId],
  );

  return toProductId(products);
};

export {
  create,
  getAll,
  update,
  getByOrderId,
};