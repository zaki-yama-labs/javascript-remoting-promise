import { connect } from 'react-redux';

import App from '../components/App';

import { sayHello, sayHelloError, clearErrorMessage } from '../actions';

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    errorMessage: state.errorMessage,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(sayHello());
    },
    onClickError: () => {
      dispatch(sayHelloError());
    },
    onCloseToast: () => {
      dispatch(clearErrorMessage());
    },
  };
};

export default connect(mapStateToProps, mapDispatchProps)(App);
