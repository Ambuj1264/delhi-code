import { combineReducers } from 'redux';
import { sidebar, fetchProducts } from './Reducer';
const rootReducer:any = combineReducers({
  sidebar,
  fetchProducts
});

export default rootReducer;