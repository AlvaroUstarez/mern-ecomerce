import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

import './bootstrap.min.css'; 
import './index.css'; 

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
