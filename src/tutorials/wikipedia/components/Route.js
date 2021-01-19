import {useEffect, useState} from 'react';

// When 1 component is provided inside another one, then child will be passed as "children" property to outer component
export const Route = ({path, children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, [])

    return currentPath === path ? children : null; // returning child component itself
};
