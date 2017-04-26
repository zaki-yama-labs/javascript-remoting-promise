import Remoting from '../service';

export const LOADING_START = 'LOADING_START';
export const LOADING_END = 'LOADING_END';

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
  return (getState, dispatch) => {
    console.log('hi');
    dispatch(loadingStart());
    new Remoting().sayHello((result) => {
      alert(result);
      dispatch(loadingEnd());
    });
  };
}
