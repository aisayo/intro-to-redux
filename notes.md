# Redux

First: [Redux Dev Tools](https://github.com/zalmoxisus/redux-devtools-extension)

## What is Redux?

- A library
- A design pattern
- A predictable state container for JS applications
- Manages and updates application state using events called ‘actions’

### Redux Flow

```action => reducer => updated state```

## Why use Redux?

```“The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur.”```

- Single source of truth:
  - Places all our data in one place separate from our components
  - Makes state changes predictable
  - Helps avoid a web of state and props for large scale applications
  - Any component now has access to the state object, all that needs to be done is connected to redux
  - Does not care about position of component in the component tree. Meaning all components have access to the state
