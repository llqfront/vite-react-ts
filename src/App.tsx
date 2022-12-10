import React from 'react';
import { Provider } from 'react-redux'
import Router from '@/router';
import store from '@/stores'
const App = () => (
  <Provider store={store}>
    <Router/>
  </Provider>
)
export default App;
