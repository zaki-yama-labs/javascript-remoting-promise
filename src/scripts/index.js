import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { util } from 'react-lightning-design-system';

import App from './containers/App';
import '../stylesheets/index.scss';

const store = configureStore();

export const init = function(el, assetRoot) {
  util.setAssetRoot(assetRoot);
  console.log('Set asset root as', util.getAssetRoot());

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};
