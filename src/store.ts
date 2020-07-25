import { createStore } from 'redux';
import rootReducer from './reducers';

const initialStore = {};

export const store = createStore(rootReducer, initialStore);
