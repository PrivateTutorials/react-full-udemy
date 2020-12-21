// Import React and ReactDOM libs
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    // if jsx is not on the same line with return, then you need to use "( )"
    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>Submit</button>
        </div>
    );
}

//  return <div>Hi There!</div> // this is jsx
//  In Babel it will look like this:
//  return React.createElement("div", null, "Hi There!");

// Take react component and show it on screen
ReactDOM.render(<App/>, document.querySelector('#root'));
