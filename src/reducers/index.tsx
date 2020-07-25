import { combineReducers } from 'redux';
import postReducer from './productsReducer';

export default combineReducers({
  posts: postReducer,
});
