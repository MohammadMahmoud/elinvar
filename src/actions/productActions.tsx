import { FETCH_PRODUCTS } from './types';

export const fetchPosts = () => (dispatch: any) => {
  fetch('https://jsonplaceholder.typicode.com/Products')
    .then((res) => res.json())
    .then((Products) =>
      dispatch({
        type: FETCH_PRODUCTS,
        payload: Products,
      })
    );
};

