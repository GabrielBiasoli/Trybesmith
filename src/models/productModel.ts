import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { NewProduct, ProductDTO, ProductOrder } from '../interfaces/Product';
import connection from './connection';

export const create = async ({ amount, name }: NewProduct) => {
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

export const getAll = async () => {
  const [products] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.Products',
  );

  return products as ProductDTO[];
};

export const update = async ({ productId, orderId }: ProductOrder) => {
  await connection.execute(
    'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
    [orderId, productId],
  );
};

const toProductId = (products: ProductDTO[]) => {
  const productsFormated = products
    .reduce((acc: number[], curr: ProductDTO) => [...acc, curr.id], []);
  return productsFormated;
}; 

export const getByOrderId = async (orderId: string) => {
  const [products] = await connection.execute<RowDataPacket[]>(
    'SELECT id FROM Trybesmith.Products WHERE orderId = ?',
    [orderId],
  );

  return toProductId(products as ProductDTO[]);
};
