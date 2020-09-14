# Redux

First: [Redux Dev Tools](https://github.com/zalmoxisus/redux-devtools-extension)

## What is Redux?

- A JavaScript Library
- A design pattern
- A predictable state container for JS applications
- Manages and updates application state using events called ‘actions’

## Redux Focus

- State: what is state?

### Redux Flow

```action => reducer => updated state```

## Why use Redux?

```“The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur.”```

- Single source of truth:
- Stores all data in one place separate from our components
- Makes state changes predictable
- Helps avoid a web of state and props for large scale applications
- Does not care about position of component in the component tree. Meaning all components have access to the state
- Helps give each component the exact state it wants
- Avoids unnecessary re-rendering if components do not rely on updated state

## Using Redux

- `npm install redux`

## When to use Redux?

- Not all React applications will need Redux!

## Fundamental building blocks of Redux

- Store
  - An object
  - Only one store exists per JS application
  - Holds all of applications state
  - Gatekeeper for access and alterations to state
  - Provided methods `getState()` & `dispatch()`

  - Create a store
    1. Make sure that Redux is installed
    2. ```import { createStore } from "redux";``` in `index.js` file
    3. `createStore` takes in a reducer as first argument

- Reducer
  - A JavaScript function
  - Similar to reducer function: takes in a number of arguments and reduces it to one value
  - Takes in two parameters: current state & action
  - Must be a pure function
  - Produces the state of an application
  - Defined as a switch/case statement
  - Never mutates state

- Actions
  - a JavaScript object with two properties: type & payload
  ```{type: 'A_STRING', payload: data}```
  - Type is required, should be a string and drives how data will change
  - Payload describes what should change
  - Actions are wrapped by a function, called `Action Creators`
  
## Connecting Redux with React
  
- Need to install React-Redux library: `npm install react-redux`

- Provider
  - A high order component from the react-redux library
  - Provider will wrap the React application and make it aware of the Redux store

- Connect
  - Connects react component with redux store
  - Takes in at least one argument

- Thunk
  - A middleware that looks at every action that passes through the system, and if it’s a function, it calls that function

- Compose
  - "Compose is used when you want to pass multiple store enhancers to the store. Store enhancers are higher order functions that add some extra functionality to the store. The only store enhancer which is supplied with Redux by default is applyMiddleware however many other are available."

## Resources

- [React Redux](https://www.npmjs.com/package/react-redux)
- [Switch Statement](https://www.w3schools.com/js/js_switch.asp)
- [Redux Docs](https://redux.js.org/)
- [Redux Cheatsheet](https://devhints.io/redux)
- [Compose](https://redux.js.org/api/compose)