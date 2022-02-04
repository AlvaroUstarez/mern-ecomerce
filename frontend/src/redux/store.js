import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

//const userStorage=localStorage.getItem('userLogger') ? JSON.parse(localStorage.getItem('userLogger')):null;
const userInfoFromStorage = localStorage.getItem('userLogger')
  ? JSON.parse(localStorage.getItem('userLogger'))
  : null;
const initialState = {
    //userLogger:userStorage
    userLogger: { userAuth: userInfoFromStorage },//userAuth es lo que se llama desde selector del login
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
