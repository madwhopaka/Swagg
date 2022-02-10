import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router  } from 'react-router-dom';
import App from './App';
import {Provider} from 'react-redux' ; 
import {store,persistor}from './redux/store.js' ; 
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.render(
  <Provider store = {store}>
  <PersistGate loading= {null} persistor={persistor}>
     <Router>
    <App />
    </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);


