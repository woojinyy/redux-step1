import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import reducer from './redux/store';
import ReduxApp from './ReduxApp';

const store = legacy_createStore(reducer)//worker(state,action)
console.log(store.getState());//getState()함수를 통해 상태값 보기 state.js에있는 정보
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   {/*  <App /> */}
  <Provider store={store} >{/* props로 넘기기 */}
    <ReduxApp/>
   </Provider>
  
  </>
);

