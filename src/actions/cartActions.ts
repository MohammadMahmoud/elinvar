import { ProductProps } from '../components/products';

export type addProduct = {
  type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT';
  payload: ProductProps;
};

export type removeProduct = {
  type: 'REMOVE_PRODUCT';
  payload: ProductProps;
};

export const addProduct = (product: ProductProps): Action => ({
  type: 'ADD_PRODUCT',
  payload: product,
});

export const removeProduct = (product: ProductProps): Action => ({
  type: 'REMOVE_PRODUCT',
  payload: product,
});

export type Action = addProduct | removeProduct;
