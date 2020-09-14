// import React, { StrictMode } from 'react';
// import ReactDOM from 'react-dom';

// import App from './App'

// ReactDOM.render(
//     <StrictMode>
//         <App />
//     </StrictMode>, 
//     document.getElementById('root')
// )

import { createStore } from 'redux'
import rootReducer from './exampleReducer'

const store = createStore(rootReducer)

export default store;

console.log(window.store = store)
console.log(store.getState())