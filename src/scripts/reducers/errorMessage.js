import { RAISE_ERROR, CLEAR_ERROR_MESSAGE } from '../actions';

export default function errorMessageReducer(state = '', action) {
  switch (action.type) {
    case RAISE_ERROR:
      return action.payload;
    case CLEAR_ERROR_MESSAGE:
      return '';
    default:
      return state;
  }
}
