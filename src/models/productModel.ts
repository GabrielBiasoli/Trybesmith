import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { NewProduct, ProductDTO, ProductOrder, ProductOrderId } from '../interfaces/Product';
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

  return products as ProductDTO[];
};

const update = async ({ productId, orderId }: ProductOrder) => {
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

const getByOrderId = async (orderId: string) => {
  const [products] = await connection.execute<RowDataPacket[]>(
    'SELECT id FROM Trybesmith.Products WHERE orderId = ?',
    [orderId],
  );

  return toProductId(products as ProductDTO[]);
};

const groupAllOrderIds = async () => {
  const [ordersIds] = await connection.execute<RowDataPacket[]>(
    'SELECT orderId FROM Trybesmith.Products GROUP BY orderId',
  );

  return ordersIds as ProductOrderId[];
};

export {
  create,
  getAll,
  update,
  getByOrderId,
  groupAllOrderIds,
};