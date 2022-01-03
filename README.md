Oath client ID:
110629735077-amn2i8ms5a04ml6qa9fud8rpn705a86g.apps.googleusercontent.com

Event listeners:
Should be placed in useEffect() hooks:

// adding listener and removing it on self-cleaning f()
useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
    };
}, []);
