import { Product } from '../types';
export const ADD_PRODUCT = 'SEND_MESSAGE';
export const DELETE_PRODUCT = 'DELETE_MESSAGE';

export type addProduct = {
  type: typeof ADD_PRODUCT;
  payload: Product;
};

export type removeProduct = {
  type: typeof DELETE_PRODUCT;
  payload: Product;
};

export const addProduct = (product: Product): Action => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const removeProduct = (product: Product): Action => ({
  type: DELETE_PRODUCT,
  payload: product,
});

export type Action = addProduct | removeProduct;
