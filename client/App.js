import React from 'react';
import {Provider} from 'react-redux'

import AppNavigator from './navigation/AppNavigator';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
