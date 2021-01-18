import React from 'react';
import {Translate} from "./Translate";
import {Accordion} from "./Accordion";
import {Search} from "./Search";
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

const showAccordion = () => {
    if (window.location.pathname === '/') {
        return <Accordion items={items}/>
    }
}

const showList = () => {
    if (window.location.pathname === '/list') {
        return <Search/>
    }
}

const showDropdown = () => {
    if (window.location.pathname === '/dropdown') {
        return <Dropdown/>
    }
}

const showTranslate = () => {
    if (window.location.pathname === '/translate') {
        return <Translate/>
    }
}

export const App = () => {

    return (
        <div>
            {showAccordion()}
            {showList()}
            {showDropdown()}
            {showTranslate()}
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
