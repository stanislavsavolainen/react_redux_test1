
//React with Redux and Material-ui , test 4

// https://www.npmjs.com/package/redux

//npm install redux --save

// ./node_modules/.bin/webpack -d 

import React from 'react';
import { render } from 'react-dom';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';


import { createStore, combineReducers } from 'redux';

const initialState = {
    buttonvalue : 0
}

function reducerFunction(state = initialState, action){

    

    switch(action.type){
        case 'action1': console.log("Redux works"); state.buttonvalue += 1;  break;
        //default: break;
    }

    return state;
}


var store = createStore(reducerFunction);


class App extends React.Component {

    save_data_event(){
        store.dispatch( { type: 'action1' } );
        this.setState(this.state);
    }


    render() {
      //  return <p> Hello React! <button onClick={() => this.save_data_event() }> Click to dispatch action (Redux)</button> </p>;
         return ( 
            <div>    
                <AppBar>
                    <Toolbar> 
                        <Button onClick={() => this.save_data_event() }  style = { {  color: 'green', backgroundColor: 'silver' } } > Material-ui Button dispatch redux </Button>  
                    </Toolbar>
                    <Toolbar>
                        <Button style = { {  color: 'red', backgroundColor: 'silver' } } > { store.getState().buttonvalue} </Button>
                    </Toolbar>    
                </AppBar>
            </div> 
        );



    }

}

render(<App />, document.getElementById('app'));
console.log('Hello World!');
