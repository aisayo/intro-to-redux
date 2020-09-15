// events 

// addStudent action => event that is going to trigger every time i create a new student

//objects that properties: required property `type` 

// actionCreators => a function that returns our action object, event listeners


export default function addStudent(student){
    return {
        type: 'ADD_STUDENT',
        payload: student
    }
}

