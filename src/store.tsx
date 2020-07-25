import { createStore } from 'redux';
import rootReducer from './reducers';

const initialStore = {};

const store = createStore(rootReducer, initialStore);

export default store;
