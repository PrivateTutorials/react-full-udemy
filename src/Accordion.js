import React, {useState} from 'react';

export const Accordion = ({items}) => {
    // Array destructuring. The same as:
    // const things = useState(null);
    // const activeIndex = things[0];
    // const setActiveIndex = things[1];
    const [activeIndex, setActiveIndex] = useState(null);
    // setActiveIndex - the same as setState in class components. Sets the state and re-renders Component

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const renderedItems = items.map((item, index) => {
        const isActive = index === activeIndex ? 'active' : '';

        return (
            // in order not to make a redundant <div> wrapper. It will be ony containing Jsx element, without html.
            // smth like <ng-template> in Angular
            <React.Fragment key={item.title}>
                <div className={`title ${isActive}`}
                     onClick={() => onTitleClick(index)}>
                    <i className="dropdown icon"> </i>
                    {item.title}
                </div>
                <div className={`content ${isActive}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    )
}
