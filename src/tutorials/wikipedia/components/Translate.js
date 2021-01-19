import React, {useState} from 'react';
import {Dropdown} from "./Dropdown";
import {Convert} from "./Convert";

const languageOptions = [
    {label: 'Afrikaans', value: 'af'},
    {label: 'Arabic', value: 'ar'},
    {label: 'Dutch', value: 'nl'},
    {label: 'Hindi', value: 'hi'}
]

export const Translate = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
            </div>
            <Dropdown label="Select Language:"
                      selected={selectedLanguage}
                      onSelectedChangeHandler={setSelectedLanguage}
                      options={languageOptions}
            />
            <hr/>
            <h3 className="ui header">Output</h3>
            <Convert text={text}
                     language={selectedLanguage}
            />
        </div>
    );
}
