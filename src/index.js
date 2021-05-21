import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'; //Storeを作るために必要なためimport
import {Provider} from 'react-redux';
import reducer from './reducers';// createStoreの引数にするためimport
//reducerのファイルのindex.jsのexport default combineReducersを指している
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer) //storeを作成して、作成したReducerを登録

ReactDOM.render(
  <Provider store={store}>
     {/* 子にstoreを渡してProviderでApp以下でstoreを使用できるようにする、Providerが全ての親 */}
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
