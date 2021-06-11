import React from 'react';
import {connect} from 'react-redux';
import flv from 'flv.js';
// flv - some kind of axios. It's job - to fetch video data from server
import {fetchStream} from "../../actions";

class StreamShow extends React.Component {
    constructor(props) {
        super(props);

        this.videoRef = React.createRef();
    }

    // runs only once
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchStream(id);

        this.buildPlayer();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.buildPlayer();
    }

    componentWillUnmount() {
        // to stop attempting to stream video and to detach itself from video elementRef
        this.player.destroy();
    }

    buildPlayer() {
        // if we already have a player instance or we yet didn't load the stream
        if (this.player || !this.props.stream) {
            return;
        }
        const {id} = this.props.match.params;

        // we are accessing the stream by ID. The streamer itself has also to share his video to the stream with this ID
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        })

        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading</div>
        }

        const {title, description} = this.props.stream;

        return (
            <div>
                {/*if property has value of boolean "true", then "true" can be not written
                it means that: controls={true} === controls*/}
                <video ref={this.videoRef} style={{width: '100%'}} controls/>
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        )
    }
}

const mapStateToProps = (state, ownPropsOfTheComponent) => {
    return {
        stream: state.streams[ownPropsOfTheComponent.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream})(StreamShow);

// the idea of connect f() - is to pass to Component in props Obj:
// - state
// reducers
