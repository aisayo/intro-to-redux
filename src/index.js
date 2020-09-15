//store => container with all your state 
// reducer => what dictates our store state
// actions => tell our reducer what type of state to return 

//create our store 

import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'

import rootReducer from './reducer'
import App from './App'


//connecting react to redux
import { Provider } from 'react-redux'

// a function takes in an argument reducer 

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
)