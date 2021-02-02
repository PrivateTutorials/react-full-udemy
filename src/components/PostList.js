import React from 'react';
import {connect} from "react-redux";
import {fetchPosts} from "../actions";

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return <div>Post List</div>
    }
}

export default connect(null, {fetchPosts})(PostList);
// 1-st argument to connect() f() - is mapStateToProps(). If we don't have it yet - put 'null' as 1-st arg
// 2-nd argument - action creators O
