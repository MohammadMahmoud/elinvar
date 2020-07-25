import { ProductProps } from '../components/products';
import { Action } from '../actions/cartActions';

export interface CartState {
  products: any;
}

const initialState: CartState = {
  products: [],
};

export const cartReducer = (
  state: CartState = initialState,
  action: Action
) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return { products: [...state.products, action.payload] };
    case 'REMOVE_PRODUCT':
      return {
        products: state.products.filter(
          (product: ProductProps) =>
            product.productID !== action.payload.productID
        ),
      };
    default:
      return state;
  }
};
