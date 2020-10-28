const redux = require('redux')

const initialState = {
  counter: 0
}

// Reducer
// Першим параметром "Reducer" приймає "state" (state на початку позамовчувані дорівнює initialState.) Другим параметром він приймає "action" (в якого є обовязкове поле "type")
const reducer = (state = initialState, action) => {

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

// Store
const store = redux.createStore(reducer)

store.subscribe(() => {
  console.log('Subscribe', store.getState());

})


// Actions
const addCounter = {
  type: 'ADD'
}

store.dispatch(addCounter)


store.dispatch({type: 'SUB'})


store.dispatch({type: 'ADD_NUMBER', value: 10})












// Для початку треба створити "Store" де будуть зберігатись усі дані.
// Reducer це звичайна JS function яка робить певні зміни