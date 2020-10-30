// нативна функція JS яка дозволяє імпортувати redux, тепер у нас є бібліотека з мінімальним потрібним набором функцій
const redux = require('redux')

// Створюємо початковий "state"
const initialState = {
  counter: 0
}

//  ОСНОВНІ ЧАСТИНИ ЯКІ ВХОДЯТЬ В "REDUX"

// Для початку треба створити стор, те місце де буде зберігатись інформація, "REDUX" пропагандує що увесь "state" який описується в компоненті він описується для всього додатку, тобто в одному JS обєкті зберігається стан усього додатку воно називається "STORE"

// 1) Reducer - 
// Reducer це звичайна JS  функція яка робить певні перетворення. Вона приймає в себе певні параметри, а точніше їх 2 це (state, action). Першим параметром вона приймає 'state' тобто той обєкт що описує стан усього нашого додатку. Другим параметром функція приймає обєкт 'action' у якого є одне обовязкове поле "type". Reducer завжди повертає новий 'state'. Reducer ми передаємо в store в якості параметра і не викликаємо його

const reducer = (state = initialState, action) => {
  // сформували "action"
  if(action.type === 'ADD') {
    return {
      counter: state.counter + 1 
    }
  }
  if(action.type === 'SUB') {
    return {
      counter: state.counter - 1 
    }
  }
  if(action.type === 'ADD_NUMBER') {
    return {
      counter: state.counter + action.value
    }
  }


  return state
}



// 2) Store - 
const store = redux.createStore(reducer)
// підписуємось на зміни стору
store.subscribe(() => {
  console.log('Subscribe', store.getState());
})
// Для того щоб подивитись що лежить у сторі ми можемо скористатись функцією  "getState" яка дозволяє отримати поточний стан "store"
// console.log('1', store.getState())
// Для зміни стору нам потрібно юзати "action"


// 3) Action -
// Action це обєкт і у нього обовязково має бути поле "type" зі стрінгою. Для опрацювання екшену ми передаємо його як параметр у функцію "reducer". Поле "type" нам потрібно для того щоб ми розуміли яку дію ми робимо
const addCounter = {
  // 'ADD' означає що коли ми будем додавати 1 до "counter"
  type: 'ADD'
}
// викликаємо дію
store.dispatch(addCounter)
// console.log('2', store.getState())

store.dispatch({type: 'SUB'})
// console.log('3', store.getState())

store.dispatch({type: 'ADD_NUMBER', value: 10})
// console.log('4', store.getState())
