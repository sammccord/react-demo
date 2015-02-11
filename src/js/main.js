var React = require('react');
var CommentBox = require('./components/comment-box');

React.render(
    <CommentBox className="commentBox" />,
    document.getElementById('main')
)