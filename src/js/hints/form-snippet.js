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