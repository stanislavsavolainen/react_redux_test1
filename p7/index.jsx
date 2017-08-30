
// pacakage.json -> "react-redux": "^5.0.5",
// package.json -> "redux": "^3.7.2", (also required for react-redux lib)

// ./node_modules/.bin/webpack -d 

// ********** remember modify .babelrc file **********

//{ 
// "presets" : ["es2015", "react"],
// "plugins": ["transform-object-rest-spread"]
//} 

//*****************************************************/

//console : npm install --save-dev babel-plugin-transform-object-rest-spread
//support spread operator for redux state

//Provider know what store is

//redux-persist remember store values after user left react page or clone browser/computer



import React from 'react';
import { render } from 'react-dom';

import { connect } from 'react-redux';

import { createAction, createReducer } from 'redux-act';

import { createStore, combineReducers } from 'redux';

import { Provider } from 'react-redux';

//material-ui components
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';




//========================= ESTIMATE (not done) ==========================================

// Initial state
const initialState = { 
    foo: 3,
    button_value: 0 
};

const reduxAction1 = createAction("test-redux-action-1");

//actions and initialState  --> createReducer function is redux-act
const reducer = createReducer(
    // [reduxAction1] (state, action)  => ({  { console.log("redux") } }

    {
        [reduxAction1]: state => {
            console.log("Redux-act working !" + JSON.stringify(state));
            return ({
                ...state,
                button_value: state.button_value + 1
            })
        }
    }, initialState

);

const store = createStore(reducer);
//const comb_reducer = combineReducer(reducer);

// createStore(comb_reducer) ---> createStore from combined reducers. Thouse reducers are redux-act library reducers

//combineReducer and createStore come from vanilla redux like "import { createStore, combineReducers } from 'redux';"


//=========================================================================================


const mapStateToProps = state => {
    console.log("Map state to props !" + JSON.stringify(state));

    return ({
        //props -> props will be used in render to view redux data
        redux_props_value: state.button_value
    })
}

const mapDispatchToProps = dispatch => ({
    //dispatch
    mydispatch_function: () => {
        dispatch(reduxAction1());
    }


});

//@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component {
    render() {
        //return <p> Hello React!</p>;
        return (
            <div>
                <AppBar>
                    <Toolbar>
                        <Button onClick={() => this.props.mydispatch_function()} style={{ color: 'green', backgroundColor: 'silver' }} > Material-ui Button dispatch redux </Button>
                    </Toolbar>
                    <Toolbar>
                        <Button style={{ color: 'red', backgroundColor: 'silver' }} > {this.props.redux_props_value} </Button>
                    </Toolbar>
                </AppBar>
            </div>
        );

        //{store.getState().buttonvalue}

    }
}


//insted of using @connect annotation above class. We can export connect with this class
const ReduxApp = connect(mapStateToProps, mapDispatchToProps)(App)

render(
    <Provider store={store}>
        <ReduxApp />
    </Provider>
    , document.getElementById('app'));
