import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// функція яка створює "store"
import {createStore, applyMiddleware, compose} from 'redux'
// Для того щоб наш додаток розумів що він буде працювати з redux, нам потрібно огорнути його в компонент з бібліотеки 'react-redux' який називається "Provider" по типу з (BrowserRouter)
import {Provider} from 'react-redux'
// підключаємо наш створений "Reducer"
import rootReducer from './redux/rootReducer'
import reduxThunk from 'redux-thunk'

// Middleware це функція яка додає функціонал до Redux 
// Функція loggerMiddleware" при зміні "store" в "Redux" всі зміни буде виводи в консоль замість нас
// function loggerMiddleware(store) {
//   return function(next) {
//     return function(action){
//       const result = next(action)
//       console.log('Middleware', store.getState());
//       return result
//     }
//   }
// }


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

// Варіант за допомогою ES6
const loggerMiddleware = store => next => action => {
  const result = next(action)
  console.log('Middleware', store.getState());
  return result
}


// наша функція по створені "store", яка приймає reducer 
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(loggerMiddleware, reduxThunk)))
// для зручності створюємо змінну app в яку ми запихаємо наш додаток огорнутий компонентом "Provider"
const app = (
  //  передаємо нашому провайдеру "store"
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

reportWebVitals();
