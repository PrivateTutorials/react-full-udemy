import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

import {fetchStreams} from "../../actions";

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdminActions(stream) {
        if (stream.userId === this.props.loggedUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit </Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
                </div>
            )
        }
    }

    renderListOfStreams() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {/*we place buttons here for semantic ui style it properly*/}
                    {this.renderAdminActions(stream)}
                    <i className="large middle aligned icon camera"/>
                    <div className="content">
                        <Link to={`streams/${stream.id}`} className="header">
                            {stream.title}
                        </Link>
                        <div className="description">
                            {stream.description}
                        </div>
                    </div>
                </div>
            )
        })
    }

    renderCreateButton() {
        if (this.props.isSignedIn) {
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to="streams/new" className="ui button primary">Create Stream</Link>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <h2>Streams:</h2>
                <div className="ui celled list">
                    {this.renderListOfStreams()}
                </div>
                {this.renderCreateButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // initially we have streams in state, as 1 Object. We are transforming it to an array
        streams: Object.values(state.streams),
        loggedUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);
