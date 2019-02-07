import  React, { Component } from 'react'
import './counter.css'
export  class Counter extends Component {
  render() {
      const {value , onIncrement , onDecrement} = this.props
    return (
      <div>
        <h3>Counter : {value}</h3>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
      </div>
    )
  }
}

export default Counter;
