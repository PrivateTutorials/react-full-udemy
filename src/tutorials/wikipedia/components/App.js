import React, {useState} from 'react';
import {Translate} from "./Translate";
import {Accordion} from "./Accordion";
import {Search} from "./Search";
import {Dropdown} from "./Dropdown";
import {Route} from "./Route";
import {Header} from "./Header";

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

    return (
        <div>
            <Header/>
            <Route path="/">
                {/* When 1 component is provided inside another one, then child will be passed as "children" property to outer component */}
                <Accordion items={items}/>
            </Route>

            <Route path="/list">
                <Search/>
            </Route>

            <Route path="/dropdown">
                <Dropdown
                    label="Select Color"
                    options={options}
                    selected={selected}
                    onSelectedChangeHandler={setSelected}
                />
            </Route>

            <Route path="/translate">
                <Translate/>
            </Route>
        </div>
    )
}


// Toggling dropdown:
/*
{
    showDropdown ?
        <Dropdown
            options={options}
            selected={selected}
            onSelectedChangeHandler={setSelected} // convention: on smth set - onSelectedChange
        />
        : null
}*/
