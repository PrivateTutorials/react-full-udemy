import React from 'react';
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
    // Context.Consumer approach
    // we always pass a cb f() as a child to Consumer Component
    renderSubmit(value) {
        return value === 'english' ? 'Submit' : 'Voorleggen';
    }

    render() {
        return (
            <ColorContext.Consumer>
                {(colorValue) =>
                    <button className={`ui button ${colorValue}`}>
                        <LanguageContext.Consumer>
                            {/*{(value) => value === 'english' ? 'Submit' : 'Voorleggen'}*/}
                            {(value) => this.renderSubmit(value)}
                        </LanguageContext.Consumer>
                    </button>
                }

            </ColorContext.Consumer>
        )
    }
}

export default Button;

// LanguageContext.Consumer are better to use when we have multiple Context objects
// otherwise, we may just use: this.context

// in Consumer - a cb() f() has always be provided as a child
