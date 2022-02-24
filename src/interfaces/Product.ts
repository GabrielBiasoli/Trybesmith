export interface NewProduct {
  name: string,
  amount: string
}

export interface ProductWithoutOrder extends NewProduct {
  id: number
}

export interface ProductOrderId {
  orderId: number
}

export interface ProductDTO extends ProductWithoutOrder {
  orderId: number
}

export interface ProductOrder {
  productId: number,
  orderId: number,
}