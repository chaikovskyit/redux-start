// // задаємо початкове значення state
// const initialState = {
//   counter: 0
// }
// // Оскільки це наш "Reducer" то ми передаємо в нього "state" та "action"
// export default function rootReducer(state = initialState, action) {
//   // Логіка для виконання наших екшенів
//   switch(action.type) {
//     case 'ADD':
//       return {
//         counter: state.counter + 1
//       }
//     case 'SUB':
//       return {
//         counter: state.counter - 1
//       }
//     case 'ADD_NUMBER':
//       return {
//         counter: state.counter + action.payload
//       }
//     default:
//       return state    
//   }

//   // "Reducer" завжди повертає змінений "state"
//   return state
// } 




// функція яка обєднує редюсери
import {combineReducers} from 'redux'

import counter1 from './reducers/counter1'
import counter2 from './reducers/counter2'

export default combineReducers({
  counter1, counter2
})