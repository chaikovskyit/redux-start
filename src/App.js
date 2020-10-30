import React, {Component} from 'react'
// функція яка дозволяє зєднати компонент reactu з store redux
import {connect} from 'react-redux'
import './App.css';
import Counter from './Counter'
class App extends Component {
  // updateCounter(value){
  //   this.setState({
  //     counter: this.state.counter + value
  //   })
  // }
  render() {
    return(
      <div className='App'>
        <h1>Counter <strong>{this.props.counter}</strong></h1>
        <hr/>
        <div className="Actions">
          {/* <button onClick={() => this.updateCounter(1)}>+</button> */}
          <button onClick={this.props.onAdd}>+</button>
          {/* <button onClick={() => this.updateCounter(-1)}>+</button> */}
          <button onClick={this.props.onSub}>-</button>

          <button onClick={() => this.props.onAddNumber(4)}>4</button>
        </div>
        <hr/>
        <Counter />
      </div>
    )
  }
}
// приймає в себе загальний "state"
function mapStateToProps(state){
  // повертаємо новий JS обєкт трансформований, для того щоб його юзати не як "state", а як "props". "state.counter" ми беремо з "rootReducer.js"
  return {
    counter: state.counter1.counter
  }
}

// повертає нам об'єкт з екшенами
function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch({type: 'ADD', value: Math.random()}),
    onSub: () => dispatch({type: 'SUB', value: Math.random()}),
    onAddNumber: number => dispatch({type: 'ADD_NUMBER', payload: number})
  }
}

// Функція "connect" приймає в себе 2 параметри, 2 опціональних параметри або 2 функції:
// 1) mapStateToProps()
// 2) mapDispatchToProps()

// викликаємо функцію "connect" яка нам повертає функцію в яку ми передаємо наш компонент "App", в функцію "connect" ми передаємо "mapStateToProps" не викликаючи її
export default connect(mapStateToProps, mapDispatchToProps)(App)
