var React = require('react');

var Comment= React.createClass({
    changeColor:function(){
      this.getDOMNode().style.color = 'red';
    },
    render:function(){
        return (
            <li>
                <h3>{this.props.comment.author}</h3>
                <p onClick={this.changeColor}>{this.props.comment.text}</p>
            </li>
        )
    }
});

module.exports = Comment;