import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spenner';

// another way to add semantic ui, except having it in index.html is:
// npm install semantic-ui-css
// import "semantic-ui-css/semantic.min.css"; in this file

// CLASS component example
class App extends React.Component {
    state = {
        latitude: null,
        errorMessage: ''
    };

    /*    constructor(props) {
            super(props);

            this.state = {
                latitude: null,
                errorMessage: ''
            };
        }*/

    componentDidMount() {
        console.log('This F() is called once the component is rendered');
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('This F() is called once the component is updated, but only after render f() again re-rendered');
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.latitude) {
            return <p>Error: {this.state.errorMessage}</p>
        }
        if (!this.state.errorMessage && this.state.latitude) {
            return <SeasonDisplay latitude={this.state.latitude}/>
        }
        return <Spinner message="Please accept location request"/>
    }

    // render() f() is required for any react class component. It triggers each time the component/state is updated
    render() {
        return this.renderContent();
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
