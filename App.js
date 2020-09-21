import React from 'react';
import { Provider } from 'react-redux';

import MainApp from './src/components/MainApp';

import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainApp/>
    </Provider>
  );
}

export default App;