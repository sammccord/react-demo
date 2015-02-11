var React = require('react');

var CommentForm = React.createClass({
    onClick:function(){
      alert('HEY');
    },
    handleSubmit: function(e){
        e.preventDefault();
        var text = this.refs.text.getDOMNode().value.trim();
        var author = this.refs.author.getDOMNode().value.trim();
        if (!text) {
            return;
        }
        this.props.onCommentSubmit(author,text);

        this.refs.text.getDOMNode().value = '';
        this.refs.author.getDOMNode().value = '';
        return;
    },
    render:function(){
      return (
          <form onSubmit={this.handleSubmit}>
              <input onClick={this.onClick} type="text" placeholder="author" ref="author"/>
              <input type="text" placeholder="text" ref="text" />
              <button type="submit">Submit</button>
          </form>
      )
  }
})

module.exports = CommentForm;