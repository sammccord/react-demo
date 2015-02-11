var React = require('react');
var Comment = require('./comment');

var CommentList = React.createClass({
    render:function(){
        var comments = this.props.comments.map(function(comment){
           return <Comment comment={comment} />
        });

        return (
            <div>
                <ul>
                    {comments}
                </ul>
            </div>
        )
    }
});

module.exports = CommentList;