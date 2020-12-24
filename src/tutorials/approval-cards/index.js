import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Notification:</h4>
                Are you sure?
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45 PM"
                    commentText="First post"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Igor"
                    timeAgo="Today at 3:00 PM"
                    commentText="Second post"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="John"
                    timeAgo="Yesterday at 5:00 PM"
                    commentText="Third post"
                />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'));
