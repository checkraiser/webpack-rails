'use strict';

var React = require('react');

var events = require('../../utils/events');

var CommentForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var text = React.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) {
      return;
    }
    //CommentBoxActions.addComment({author: author, text: text});
    events.emit('addComment', {author: author, text: text});
    React.findDOMNode(this.refs.author).value = '';
    React.findDOMNode(this.refs.text).value = '';
    return;
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" ref="author"/>
        <input type="text" placeholder="Say something..." ref="text"/>
        <input type="submit" value="Post" />
      </form>
    );
  }
});

module.exports = CommentForm;
