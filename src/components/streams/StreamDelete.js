import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Modal from "../Modal";
import history from "../../history";
import {deleteStream, fetchStream} from "../../actions";

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() {
        const {id} = this.props.match.params;

        // JSX fragment
        return (
            <div>
                <button onClick={() => this.props.deleteStream(id)}
                        className="ui negative button">Delete
                </button>
                <Link to="/" className="ui button">Cancel</Link>
            </div>
        )
    }

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure you want to delete the stream?'
        }

        return `Are you sure you want to delete the stream with title: "${this.props.stream.title}"?`
    }

    render() {
        return (
            <Modal onDismiss={() => history.push('/')}
                   title="Delete Stream"
                   content={this.renderContent()}
                   actions={this.renderActions()}/>
        );
    }
}

// ownProps - the same Object, that will be passed as "props" to the component
const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
