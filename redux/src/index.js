import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import allReducers from './reducers';
import {Provider} from 'react-redux'
// STORE -> Globalize state

const myStore = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )


// ACTION INCREMENT

/*
const increment = ()=>{
  return {
    type: 'INCREMENT'
  }
}

const decrement = ()=>{
  return {
    type: 'DECREMENT' 
  }
}

// REDUCER
const counter = (state = 0, action)=>{
  switch(action.type){
    case "INCREMENT":
      return state+1
    case "DECREMENT":
      return state-1
  }
}
  
// Store
let store = createStore(counter)

//  Display it on console
store.subscribe(()=> console.log(store.getState()))

// DISPATCH

store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(decrement())
*/
ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
