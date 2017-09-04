
// ./node_modules/.bin/webpack -d 

import React from 'react';
import { render } from 'react-dom';

//material-ui
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';

//reduxAct
import { createAction, createReducer } from 'redux-act';


//reduxAPI
import reduxApi from 'redux-api';
import thunk from 'redux-thunk'; //for midleware -> redux-api
import adapterFetch from 'redux-api/lib/adapters/fetch';

import { connect, Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

//call reduxAPI for http-request
const page_url = "http://127.0.0.1:5659";

//var fieldValue = "not defined";


//========= redux-act ======================
const initialState = {
    textFieldValue: 'not defined'
};


const reduxAction1 = createAction("redux-act-textfield");

const reducer = createReducer(

    //function parameter 1 (action)
    {
        //-----
        [reduxAction1]: (state, modifiedValue) => {



            return ({
                textFieldValue: modifiedValue
            })
        },
        //-----
        /*      
        [InputValue]: (state, params) => {
      state.value = params;
      return { ...state };
},
*/

    },
    //function parameter 2 (initialState)
    initialState

);




//======== redux api reducers ==============
const rest = reduxApi({
    api_reducer1: {
        url: `${page_url}/link1`,
        options: {
            method: 'post',
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            },
        },
        transformer(data, prevData) {
            console.log("transformer called")
            return { serverReply: data };
        }

        //...
    }


}).use('fetch', adapterFetch(fetch));


//if many lines at mapStateTo props, then use return. Remember without return is ({ }) required 
const mapStateToProps = state => ({
    server_answer: state.api_reducer1.data,
    currentFieldValue: state.textFieldReducer.textFieldValue
})

const mapDispatchToProps = (dispatch) => ({

    buttonReducerEvent(fieldValue) {
        let postBody = { check: fieldValue }; //value from props, check mapStateToProps

        dispatch(rest.actions.api_reducer1({}, { body: JSON.stringify(postBody) }));
    },

    fieldReducerEvent(fValue) {
        console.log("Dispatch, Field value : " + fValue);
        dispatch(reduxAction1(fValue));
    }


});

//combinereducers = rest.reducers ????
//object like array
/*
{
    k1: func,
    k2: func,
    k3: func
}
const reducerObject = {  r1 : reducer  ,  r2 : rest.reducers   };
{
    r1 : { [reduxAction1] : func },
    r2 : { key : func }
}

const a = { k1: 1, k2: 2, k3: 3 };
const b = { k4: 4, k5: 5, k6: 6 };
const c = { ...a, ...b };
*/

const store = createStore(combineReducers({ ...rest.reducers, textFieldReducer: reducer  }), undefined, applyMiddleware(thunk));

// -------- object1 ------------------------
const data1 = {
    element_a: "element text 12345",
    element_b: 35890
}
// -------- object2 -----------------------
const data2 = {
    element_a: "element ... asdfg /=)()/(&/ ::::  12345"
}

//********************************************************************************************** */

class App extends React.Component {

    //redux-act


    buttonClicked() {
        console.log("Use redux-api !");

        //reduxAPI dispatch api_reducer1
        // rest.api_reducer1.d
    }

    //get data from material-ui and store to reduxAPI reducer -> dispatch changes and send to server

    drawData() {

        return (<div>  object 1 -> first element : <font color="green"> {data1.element_a} </font>
            and second element : <font color="blue"> {data1.element_b} </font>
            <br />
            object 2 -> first element : <font color="orange"> {data2.element_a} </font>
            <br />
            redux-api : <font color="red"> No data </font>
        </div>);

    }

    drawMultiData() {

        let raw_array = [];
        let element_array = [];

        //not scrolling if many elements -> required table structure if there is multiple elements
        for (let i = 0; i < 4; i++) {
            // raw_array.push(  this.drawData() );
            element_array.push(<Toolbar style={{ backgroundColor: 'silver' }} > <br /> {this.drawData()}  </Toolbar>);
        }

        return element_array;
    }

    drawGUI() {

        /*
        return (
            <div>
                <AppBar>
                    <Toolbar>
                    <TextField></TextField>
                    <Button onClick={() => this.buttonClicked()}> Press  </Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
*/

        return (
            <div>
                <AppBar style={{ backgroundColor: 'green' }}>
                    <Toolbar>
                        Login :  <TextField style={{ color: 'green', backgroundColor: 'silver' }} onChange={(event) => this.props.fieldReducerEvent(event.target.value)}  ></TextField>
                    </Toolbar>
                    <Toolbar>
                        Password:  <TextField style={{ color: 'green', backgroundColor: 'silver' }} type="Password" ></TextField>
                    </Toolbar>
                    <Toolbar>
                        <Button onClick={() => this.props.buttonReducerEvent(this.props.currentFieldValue)} style={{ color: 'green', backgroundColor: 'silver' }}> Authenticate  </Button>
                    </Toolbar>
                    <Toolbar style={{ backgroundColor: '#3CB371' }}>
                        <font color="blue"><h1> User profile data, after authenticated</h1></font>
                        Server answer : {JSON.stringify(this.props.server_answer)}
                    </Toolbar>
                    {this.drawMultiData()}
                </AppBar>
            </div>
        );


    }


    render() {
        /*
        return <p> Hello React!  <br /> {this.drawGUI()} <br />
            {rest.api_reducer1.url}
        </p>;
        */
        return (
            <div>
                <br /> <h1> Material-ui components </h1> <br /> <br /> {this.drawGUI()}
            </div>);

    }

}


const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps, ...dispatchProps, ...ownProps
})
const ReduxApp = connect(mapStateToProps, mapDispatchToProps, mergeProps)(App)

render(
    <Provider store={store}>
        <ReduxApp />
    </Provider>
    , document.getElementById('app'));