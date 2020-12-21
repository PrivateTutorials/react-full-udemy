// Import React and ReactDOM libs
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click me';
}

// Create a react component
const App = () => {
    const buttonText = 'Submit';
    const buttonText2 = ['Hi', 'there'];
    const buttonText3 = {text: 'Click me'};

    // if jsx is not on the same line with return, then you need to use "( )"
    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text"/>
            {/* {} - reference to JS variables*. It means - JS code will be here */}
            <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText3.text}</button>
        </div>
    );
}

//  return <div>Hi There!</div> // this is jsx
//  In Babel it will look like this:
//  return React.createElement("div", null, "Hi There!");

// Take react component and show it on screen
ReactDOM.render(<App/>, document.querySelector('#root'));
