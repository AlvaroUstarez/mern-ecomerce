import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import store from './redux/store';

import './bootstrap.min.css'; 
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/js/dist/dropdown'; 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
 // <React.StrictMode>
 //   <App />
 // </React.StrictMode>,
 // document.getElementById('root')
);
