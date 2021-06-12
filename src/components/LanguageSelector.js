import React from 'react';
import LanguageContext from '../contexts/LanguageContext'

class LanguageSelector extends React.Component {
    static contextType = LanguageContext;

    render() {
        // this.context - contains both: state and onLanguageChange() f(),
        // that is provided in value, from Context>Provider

        return (
           <div>Select a language:
               <i className="flag us" onClick={() => this.context.onLanguageChange('english')}/>
               <i className="flag nl" onClick={() => this.context.onLanguageChange('dutch')}/>
           </div>
       )
    }
}

export default LanguageSelector;
