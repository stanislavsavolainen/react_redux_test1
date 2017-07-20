
//React with Redux , test 1

// https://www.npmjs.com/package/redux

//npm install redux --save

// ./node_modules/.bin/webpack -d 


import React from 'react';
import { render } from 'react-dom';
//import react-redux
import { createStore } from 'redux';

//define reducer (todo - function with switch-case actions inside it)

function todo( state = 0, action){

   
     switch(action.type){
        
        case 'INCREMENT':
            return state + 1;
        
        case 'DECREMENT':
        return state - 1;
        
        default:
            return state;
     }

}


//create store with reducer
store = createStore( todo );


var store;  // = createStore( this.todo );

class App extends React.Component {

/*
    // Reducer function    
    todo( state = 0, action){
        switch(action.type){
        case 'INCREMENT':
            return state + 1;
        
        case 'DECREMENT':
        return state - 1;
        
        default:
            return state;
     }
}

    componentWillMount(){
        console.log("React init function");
        store = createStore( this.todo ); 
    }
*/

    //when button clicked , execute this function
    button_event_function(){
        let text = 'data';
       // store.dispatch ({ type: 'ADD_TODO', text }) ; //dispatch action and change store value
       store.dispatch({ type: 'INCREMENT' })
       console.log( store.getState() );
       this.setState(this.state);
    }   


      button_event_function2(){
        let text = 'data';
       // store.dispatch ({ type: 'ADD_TODO', text }) ; //dispatch action and change store value
       store.dispatch({ type: 'DECREMENT' })
       console.log( store.getState() );
       this.setState(this.state);
    }  


    render() {
        //return <p> Hello React!</p>;
        return(
            <p><button onClick={() => this.button_event_function() } > value increment </button> 
            <button onClick={() => this.button_event_function2() } > value decrement </button>
            <br />redux store value : {store.getState()} </p>
        );
    
    }

}


render(<App />, document.getElementById('app'));
console.log('Hello World!');
