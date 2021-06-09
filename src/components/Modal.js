import React from 'react';
import ReactDom from 'react-dom';

const Modal = (props) => {
    return ReactDom.createPortal(
        <div onClick={props.onDismiss}
             className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()}
                className="ui standard modal visible active">
                <div className="header">
                    {props.title}
                </div>
                <div className="content">
                    {props.content}
                </div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>,
        // we need to create a separate div, but not attach modal to the <body> directly,
        // because it will remove all the other elements from body
        document.querySelector('#modal')
    );
}

export default Modal;

// React portals - elements, that are not attached under the root App component
// Most common cases for React portals:
// - modal windows
// - render some react component, that was not rendered by your react Application.
// e.g. - put react to some SSR Application
