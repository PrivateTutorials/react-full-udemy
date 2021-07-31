import styled from 'styled-components';
import {NonStyledButton} from "./Button";

// we are styling a component of an HTML type <button>
export const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.passedBG};
  
  &:hover {
    background-color: blue;
  }
`;

// to style not html, but React component
export const Button = styled(NonStyledButton)`
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.passedBG};
  
  &:hover {
    background-color: blue;
  }
`;
