import React from 'react';
import {connect} from "react-redux";

class UserHeader extends React.Component {
    render() {
        const {user} = this.props;

        if (!user) {
            return null;
        }
        return <div className="header">{user.name}</div>
    }
}

// ownProps - reference to props, that will be sent to Component
// can be used, if we need to make some preconditions before initializing the component
const mapStateToProps = (state, ownProps) => {
    return {user: state.users.find((user) => user.id === ownProps.userId)}
}

// if I have any data, that I need to pass to Component, like Action - use connect from react-redux
export default connect(mapStateToProps)(UserHeader);
