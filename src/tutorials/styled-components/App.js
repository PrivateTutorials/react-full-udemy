import React from 'react';
import {Button, StyledButton} from "./Button.styled";
import {GlobalStyles} from "./Global.styled";

const App = () => {
    return (
        <div>
            <GlobalStyles />
            <StyledButton passedBG="red">Click Me</StyledButton>
            <Button passedBG="blue" btnText="Click me"/>
        </div>
    )
}

export default App;
