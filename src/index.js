import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            errorMessage: ''
        };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                const {latitude} = position.coords;
                // setState comes from React.Component
                this.setState({latitude});
            },
            (err) => {
                console.log(err);
                this.setState({errorMessage: err.message})
            }
        );
    }

    // render() f() is required for any react class component
    render() {
        return (
            <div>
                <p>Latitude: {this.state.latitude}</p>
                <p>Error: {this.state.errorMessage}</p>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
