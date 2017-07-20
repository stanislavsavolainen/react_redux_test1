

//NOT TESTED "Estimate"


import React from 'react';
import { render } from 'react-dom';

import { createStore, combineReducers } from 'redux';


function reducerFunction1( state, action ){
        switch(action.type){
            case 'REDUCER1_ACTION' : //do something
        }
    }

function reducerFunction2( state, action){
        switch(action.type){
            case  'REDUCER2_ACTION' : //do something
        }
    }

  const reducer1 = combineReducers( reducerFunction1 );
  const reducer2 = combineReducers( reducerFunction2 );
  var store = createStore( reducer1, reducer2);

class App extends React.Component {

    button_clicked1(){
        store.reducer1.dispatch({ type: 'REDUCER1_ACTION' });
    }

    button_clicked2(){
         store.reducer1.dispatch({ type: 'REDUCER2_ACTION' });
    }

    render() {
        return <p> Hello React!</p>;
    }

}

render(<App />, document.getElementById('app'));
console.log('Hello World!');
