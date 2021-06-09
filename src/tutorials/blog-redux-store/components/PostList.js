import React from 'react';
import {connect} from "react-redux";
import {fetchPostAndUsers} from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
    componentDidMount() {
        // this.props.fetchPosts();
        this.props.fetchPostAndUsers();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
            );
        })
    }

    render() {
        return <div className="ui relaxed divided list">
            {this.renderList()}
        </div>
    }
}

// from reducers: posts: postReducer - will result here as 'posts' property
// mapStateToProps will be called each time our reducers run
const mapStateToProps = (state) => {
    return {posts: state.posts}
}

export default connect(mapStateToProps, {fetchPostAndUsers})(PostList);
// export default connect(null, {fetchPosts})(PostList);
// 1-st argument to connect() f() - is mapStateToProps(). If we don't have it yet - put 'null' as 1-st arg
// 2-nd argument - action creators Object
