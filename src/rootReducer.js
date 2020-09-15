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