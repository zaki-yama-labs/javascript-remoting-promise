import { combineReducers } from 'redux';
import loading from './loading';
import errorMessage from './errorMessage';

const rootReducer = combineReducers({
  loading,
  errorMessage,
});

export default rootReducer;
