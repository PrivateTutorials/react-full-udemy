import React from 'react';

import UserCreate from './UserCreate';
import LanguageSelector from "./LanguageSelector";

import {LanguageStore} from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

// to enable tailwind.css scripts
// import '../styles/output.css';

// initially default context value is initialized
// then component is initialized and it rewrites default context value via Provider

// If Child component, that uses context, is declared without Provider wrapper,
// then it'll always be using default value from Context

class App extends React.Component {

    render() {
        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector/>
                    {/*
                    Each separate use of ColorContext.Provider creates a new separate 'pipe' of information
                    value - value, that I want to put inside my Context Object
                    */}
                    <ColorContext.Provider value="red">
                        <UserCreate/>
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        )
    }
}

export default App;

// FIELD Class Component
// In class components context is used with static method:
// static contextType = LanguageContext;
// and accessible via "this.context":
// this.context.language
