import React, {useEffect, useRef, useState} from 'react';

export const Dropdown = ({options, selected, onSelectedChangeHandler, label}) => {
    const [openedState, setOpenedState] = useState(false);
    const formRef = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (formRef.current && formRef.current.contains(event.target)) {
                return;
            }
            setOpenedState(false);
        }

        document.body.addEventListener('click', onBodyClick, {capture: true})

        // Cleanup
        // remove eventListener, when component is not in DOM
        return () => {
            document.body.removeEventListener('click', onBodyClick, {capture: true});
        };
    }, []) // will run useEffect only once

    const renderedOptions = options.map(option => {
        if (option.value === selected.value) {
            return null; // don't render anything (already selected option)
        }
        return (
            <div key={option.value}
                 className="item"
                 onClick={() => onSelectedChangeHandler(option)}>
                {option.label}
            </div>
        );
    })

    return (
        <div ref={formRef} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div className={`ui selection dropdown ${openedState ? 'visible active' : ''}`}
                     onClick={() => setOpenedState(!openedState)}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${openedState ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}
