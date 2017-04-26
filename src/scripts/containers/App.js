import { connect } from 'react-redux';

import App from '../components/App';

import { sayHello } from '../actions';

const mapDispatchProps = (dispatch) => {
  return {
    onClick: () => {
      console.log('dispatch');
      dispatch(sayHello());
    },
  };
};

export default connect(null, mapDispatchProps)(App);
