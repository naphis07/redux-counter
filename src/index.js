import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import Counter from './components/counter'
import counter from './reducers'


const store = createStore(counter)
const rootElement = document.getElementById('root')

const render = () => ReactDOM.render(

    <Counter
        value = {store.getState()}
        onIncrement = {() => store.dispatch({type:'INCREMENT'})}
        onDecrement = {() => store.dispatch({type:'INCREMENT'})}
        
        
        />
    , rootElement
)

render()
store.subscribe(render)