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

## How to use Redux

- `npm install redux`

## When to use Redux?

## Fundamental building blocks of Redux

- Store
  - It is an object
  - Only one store exists per JS application
  - Gatekeeper for access and alterations to state
  - Provided methods `getState()` & `dispatch()`
