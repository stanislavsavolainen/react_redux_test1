
// pacakage.json -> "react-redux": "^5.0.5",
// package.json -> "redux": "^3.7.2", (also required for react-redux lib)

// ./node_modules/.bin/webpack -d 

import React from 'react';
import { render } from 'react-dom';

import { connect } from 'react-redux';

import { createAction, createReducer } from 'redux-act';

import { createStore, combineReducers } from 'redux';



//========================= ESTIMATE (not done) ==========================================

// Initial state
const initialState = {};

const reduxAction1 = createAction("test-redux-action-1");

//actions and initialState  --> createReducer function is redux-act
const reducer = createReducer(
   // [reduxAction1] (state, action)  => ({  { console.log("redux") } }

   { [reduxAction1]: state => ({
    //if redux-act dispatch happen make this action
   }) } , initialState

);


 //const comb_reducer = combineReducer(reducer);

 // createStore(comb_reducer) ---> createStore from combined reducers. Thouse reducers are redux-act library reducers

//combineReducer and createStore come from vanilla redux like "import { createStore, combineReducers } from 'redux';"


//=========================================================================================


const mapStateToProps = state => ({
 //props
});

const mapDispatchToProps = dispatch => ({
  //dispatch

    dispatch(reduxAction1()); 

});

//@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component {
    render() {
        return <p> Hello React!</p>;
    }
}
render(<App />, document.getElementById('app'));
console.log('Hello World!');

//insted of using @connect annotation above class. We can export connect with this class
export default connect(mapStateToProps, mapDispatchToProps) (App)