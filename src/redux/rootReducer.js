// задаємо початкове значення state
const initialState = {
  counter: 0
}
// Оскільки це наш "Reducer" то ми передаємо в нього "state" та "action"
export default function rootReducer(state = initialState, action) {
  // Логіка для виконання наших екшенів
  switch(action.type) {
    case 'ADD':
      return {
        counter: state.counter + action.value
      }
    case 'SUB':
      return {
        counter: state.counter - 1
      }
  }
  
  // "Reducer" завжди повертає змінений "state"
  return state
} 