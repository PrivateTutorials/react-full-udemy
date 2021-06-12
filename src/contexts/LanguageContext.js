import React from 'react';

// english - default value for Context Object
const Context = React.createContext('english');

export class LanguageStore extends React.Component {
    state = {language: 'english'};

    onLanguageChange = (language) => {
        this.setState({language})
    }

    render() {
        return (
            <Context.Provider value={{...this.state, onLanguageChange: this.onLanguageChange}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context;

// now context from here is:
// value={{...this.state, onLanguageChange: this.onLanguageChange}


// All custom components have to be capitalized
// if not - jsx will think that these are standard html tags
