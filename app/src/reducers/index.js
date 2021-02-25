import { combineReducers } from 'redux';

// Reducers
import productReducer from './product.reducer';

export default combineReducers({
  products: productReducer,
});
