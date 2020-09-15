import { createStore } from 'redux'
import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'

import rootReducer from './rootReducer'
import addStudent from './actions'
import App from './App'

const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)