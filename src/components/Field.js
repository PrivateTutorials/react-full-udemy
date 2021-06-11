import React from 'react';
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
    // it uses direct Context approach

    // hooking up context object to class component (links this Component with context)
    // contextType - special property name, has to be named exactly as it is
    static contextType = LanguageContext;

    render() {
        const text = this.context === 'english' ? 'Name' : 'Naam';

        return (
            <div className="ui field">
                <label>{text}</label>
                <input/>
            </div>
        )
    }
}

export default Field;
