// задаємо початкове значення state
const initialState = {
  counter: 10
}
// Оскільки це наш "Reducer" то ми передаємо в нього "state" та "action"
export default function rootReducer(state = initialState, action) {
  // "Reducer" завжди повертає змінений "state"
  return state
} 