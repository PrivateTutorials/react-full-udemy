import React, {useState} from 'react';
import {Dropdown} from "./Dropdown";

const items = [
    {
        title: 'What is React?',
        content: 'React is a JS Framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a best JS Framework'
    },
    {
        title: 'What is Angular?',
        content: 'Angular is a JS Corporate Framework'
    }
];

const options = [
    {label: 'Red color', value: 'red'},
    {label: 'Green color', value: 'green'},
    {label: 'Blue color', value: 'blue'}
]

export const App = () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {
                showDropdown ?
                    <Dropdown
                        options={options}
                        selected={selected}
                        onSelectedChange={setSelected} // convention: on smth set - onSelectedChange
                    />
                    : null
            }
        </div>
    )
}
