var React = require('react');
var CommentList = require('./comment-list');
var CommentForm = require('./comment-form');

var _comments = [
    {author:'President Merkin Muffley',text:'Gentlemen, you can\'t fight in here! This is the War Room.'},
    {author:'Dr. Strangelove', text:'Of course, the whole point of a Doomsday Machine is lost, if you *keep* it a *secret*! Why didn\'t you tell the world, EH?'}
];

var CommentBox = React.createClass({
    getInitialState:function(){
      return {
          comments:_comments
      }
    },
    componentDidMount: function(){
        console.log(this.state.comments);
    },
    addComment:function(author,text){
        _comments.push({
            author:author,
            text:text
        });
        this.setState({comments:_comments});
    },
    render:function(){
        return (
            <div>
                <CommentList comments={this.state.comments} className="comment-list" />
                <CommentForm onCommentSubmit={this.addComment} className="comment-form" />
            </div>
        )
    }
});

module.exports = CommentBox;