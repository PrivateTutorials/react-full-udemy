import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import {editStream, fetchStream} from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
    componentDidMount() {
        // match.params.id - are automatically passed from Router Object to component props
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit a Stream</h3>
                {/*
               initialValues - special property in redux-form
               property names - are the ones, that are indicated in the StreamForm Field components
               */}
                <StreamForm
                   /* initialValues={{title: 'Edit me', description: 'Change me too'}}*/
                    /*we only get 2 properties from the object, not changing the original */
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

// ownProps - is a reference to the props Object, that shows up inside the StreamEdit component
// it's the way to pass props from Component to here, before it'll be rendered
const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);
