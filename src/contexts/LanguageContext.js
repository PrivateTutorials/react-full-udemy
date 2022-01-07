import React from 'react';

// english - default value for Context Object
const LanguageContext = React.createContext('english');

export class LanguageStore extends React.Component {
    state = {language: 'english'};

    onLanguageChangeHandler = (language) => {
        this.setState({language})
    }

    render() {
        return (
            <LanguageContext.Provider value={{...this.state, onLanguageChange: this.onLanguageChangeHandler}}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}

export default LanguageContext;

// now context from here is:
// value={{...this.state, onLanguageChange: this.onLanguageChangeHandler}


// All custom components have to be capitalized
// if not - jsx will think that these are standard html tags
