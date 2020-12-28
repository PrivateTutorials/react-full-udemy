import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Let hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, it is chilly',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        // lat > 0 - we are in Northern hemisphere
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];

    // .season-display class matches the Component name - good practice to have outer wrapper like this
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left icon ${iconName} massive`}/>
            <h1>{text}</h1>
            <i className={`icon-right icon ${iconName} massive`}/>
        </div>
    );
}

export default SeasonDisplay;
