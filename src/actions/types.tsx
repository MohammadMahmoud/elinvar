export const FETCH_PRODUCTS = 'FETCH_POSTS';

interface FetchPostsAction {
  type: typeof FETCH_PRODUCTS;
  payload: any;
}

export type FormActionsTypes = FetchPostsAction;
