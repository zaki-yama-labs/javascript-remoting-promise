import Remoting from '../service';

export const LOADING_START = 'LOADING_START';
export const LOADING_END = 'LOADING_END';

export const RAISE_ERROR = 'RAISE_ERROR';
export const CLEAR_ERROR_MESSAGE = 'CLEAR_ERROR_MESSAGE';

function loadingStart() {
  return {
    type: LOADING_START,
  };
}

function loadingEnd() {
  return {
    type: LOADING_END,
  };
}

export function sayHello() {
  return (dispatch, getState) => {
    dispatch(loadingStart());
    new Remoting().sayHelloPromise()
      .then((result) => {
        alert(result);
        dispatch(loadingEnd());
      })
  };
}

export function raiseError(message) {
  return {
    type: RAISE_ERROR,
    payload: message,
  };
}

export function sayHelloError() {
  return (dispatch, getState) => {
    dispatch(loadingStart());
    new Remoting().sayHelloError()
      .then((result) => {
        alert(result);
        dispatch(loadingEnd());
      })
      .catch((err) => {
        console.error(err.message, err.where);
        dispatch(loadingEnd());
        dispatch(raiseError(err.message, err.where));
      });
  };
}

export function clearErrorMessage() {
  return {
    type: CLEAR_ERROR_MESSAGE,
  };
}

export function sayHelloCallback() {
  return (dispatch, getState) => {
    dispatch(loadingStart());
    new Remoting().sayHelloCallback((result) => {
      alert(result);
      dispatch(loadingEnd());
    });
  };
}
