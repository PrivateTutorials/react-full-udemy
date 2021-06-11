import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

// initially default context value is initialized
// then component is initialized and it rewrites default context value via Provider

// If Child component, that uses context, is declared without Provider wrapper,
// then it'll be always using default value from Context

class App extends React.Component {
    state = {
        language: 'english'
    }

    onLanguageChange = (language) => {
        this.setState({language})
    }

    render() {
        return (
            <div className="ui container">
                <div>Select a language:
                    <i className="flag us" onClick={() => this.onLanguageChange('english')}/>
                    <i className="flag nl" onClick={() => this.onLanguageChange('dutch')}/>
                </div>
                {/*value - value, that I want to put inside my Context Object*/}
                <ColorContext.Provider value="red">
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate/>
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        )
    }
}

export default App;
