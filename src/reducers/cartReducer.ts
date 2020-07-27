import { Product } from '../types';
import { Action, ADD_PRODUCT, DELETE_PRODUCT } from '../actions/cartActions';

export interface CartState {
  products: Product[];
}

const initialState: CartState = {
  products: [],
};

export const cartReducer = (
  state: CartState = initialState,
  action: Action
) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { products: [...state.products, action.payload] };
    case DELETE_PRODUCT:
      return {
        products: state.products.filter(
          (product: Product) => product !== action.payload
        ),
      };
    default:
      return state;
  }
};
