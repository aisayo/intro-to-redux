// a function 
// reduce function << 1 value returned 

//reducers take in 2 arguments: state, action
// reducers must be 1. pure 2. must not mutate original state 

//pure functions? 

const initialState = {
    students: []
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_STUDENT':
            return {...state, students: [...state.students, action.payload]}
        default: 
            return state
    }
}



