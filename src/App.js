import React, { Component } from 'react';

import { connect } from 'react-redux'

class App extends Component {
    render() {
        console.log(this.props.students)
        return (
            <div>
                Hello World!
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         students: state.students
//     }
//     //return an object
//     // property name/ value => whatever you want this component to use from store
//     // state
// }

function mapStateToProps(state){
    return {
        students: state.students
    }
}

export default connect(mapStateToProps)(App);


//connect => mapstatetoprops/ mapdispatchtoprops