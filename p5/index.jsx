
// pacakage.json -> "react-redux": "^5.0.5",
// package.json -> "redux": "^3.7.2", (also required for react-redux lib)

// ./node_modules/.bin/webpack -d 

import React from 'react';
import { render } from 'react-dom';

import { connect } from 'react-redux';


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

//@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component {
    render() {
        return <p> Hello React!</p>;
    }
}
render(<App />, document.getElementById('app'));
console.log('Hello World!');

//instaed of using @connect annotation above class. We can export connect with this class

export default connect(mapStateToProps, mapDispatchToProps) (App)
