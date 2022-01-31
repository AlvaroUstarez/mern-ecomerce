import {crateStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = crateStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);


const store = () => {
  return <div></div>;
};

export default store;
