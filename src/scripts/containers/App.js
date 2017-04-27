import { connect } from 'react-redux';

import App from '../components/App';

import { sayHello } from '../actions';

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    onClick: () => {
      console.log('dispatch');
      dispatch(sayHello());
    },
  };
};

export default connect(mapStateToProps, mapDispatchProps)(App);
