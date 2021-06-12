import React from 'react';

import UserCreate from './UserCreate';
import {LanguageStore} from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

// initially default context value is initialized
// then component is initialized and it rewrites default context value via Provider

// If Child component, that uses context, is declared without Provider wrapper,
// then it'll be always using default value from Context

class App extends React.Component {

    render() {
        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector />
                    {/*value - value, that I want to put inside my Context Object*/}
                    <ColorContext.Provider value="red">
                        <UserCreate/>
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        )
    }
}

export default App;
