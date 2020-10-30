import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// функція яка створює "store"
import {createStore} from 'redux'
// Для того щоб наш додаток розумів що він буде працювати з redux, нам потрібно огорнути його в компонент з бібліотеки 'react-redux' який називається "Provider" по типу з (BrowserRouter)
import {Provider} from 'react-redux'
// підключаємо наш створений "Reducer"
import rootReducer from './redux/rootReducer'

// наша функція по створені "store", яка приймає reducer 
const store = createStore(rootReducer)
// для зручності створюємо змінну app в яку ми запихаємо наш додаток огорнутий компонентом "Provider"
const app = (
  //  передаємо нашому провайдеру "store"
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

reportWebVitals();
