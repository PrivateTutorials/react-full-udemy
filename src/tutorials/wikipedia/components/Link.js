import React from 'react';

export const Link = ({href, className, children}) => {
    const onclick = (event) => {
        // to open a new Tab
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        window.history.pushState({}, '', href); // change URL

        // PopStateEvent is an event handler for the popstate event on the window.
        // A popstate event is dispatched to the window every time the active history entry changes
        // between two history entries for the same document.
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return <a onClick={onclick}
              href={href}
              className={className}>
        {children}
    </a>
}
