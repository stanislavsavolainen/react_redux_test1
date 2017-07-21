
//React with Redux , test 3

// https://www.npmjs.com/package/redux

//npm install redux --save

// ./node_modules/.bin/webpack -d 

import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';


const initialState = {
    value_a: "value1",
    value_b: "value2"
};

/*
const reducerFunction3 = ( state = initialState, action) => {

    switch(action.type){
        case 'change_value1':
            initialState.value_a = '567';
        break;

        case 'change_value2':
            initialState.value_b = 'qwerty';
        break;    
    }

return state;
}

*/
function reducerFunction3(state = initialState, action, val) {

    switch (action.type) {

        case 'change_value1':
           // initialState.value_a = val;
            return state;


        case 'change_value2':
           // initialState.value_b = val;
            return state;

        default: return state;

    }

    //return state;
}


var store = createStore(reducerFunction3);




class App extends React.Component {

    button1Event() {
        let x = document.getElementById("f1").value;
        initialState.value_a = x;
        store.dispatch({ type: 'change_value1', initialState : { value_a : x } });
        console.log( store.getState());
        console.log("value :" +x);
        this.setState(this.state);
    }

    button2Event() {
        let x = document.getElementById("f2").value;
       initialState.value_b = x;
        store.dispatch({ type: 'change_value2', initialState : { value_b : x } });
         console.log( store.getState());
         console.log("value :" +x);
           this.setState(this.state);
    }

    render() {
        return (
            <p>
                <br /><input type="text" id="f1" /><button onClick={() => this.button1Event()} > change value 1 </button>
                <br /><input type="text" id="f2" /><button onClick={() => this.button2Event()} > change value 2 </button>
                 < br /> Redux -> value_a : { store.getState().value_a} ->  value_b : { store.getState().value_b}
            </p>
        );
    }

}

render(<App />, document.getElementById('app'));
console.log('Hello World!');
