import React from 'react';
import {connect} from 'react-redux';
import StreamForm from './StreamForm'

import {createStream} from "../../actions";

class StreamCreate extends React.Component {

    // normally, BrowserRouter class creates and manages browser History object
    // but if we want to create browser History object ourselves, so we could further call in in action creator, then
    // we need not to use BrowserRouter, but to use generic Plain Router
    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

// 1-st arg = mapStateToProps
export default connect(null, {createStream})(StreamCreate);
