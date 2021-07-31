import React from 'react';

// className - important to destructure this property, if the Component will be used with styled-components f()
export const NonStyledButton = ({className, btnText}) => {
    return <button className={className}>{btnText}</button>
}
