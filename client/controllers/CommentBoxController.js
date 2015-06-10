var React = require('react');
var RootCommentComponent = require('../components/comments/RootCommentComponent');
var tree = require('../stores/CommentBoxStore');
var events = require('../utils/events');
var CommentBoxActions = require('../actions/CommentBoxActions');

module.exports =
  function(elem){
    events.on('fetch', CommentBoxActions.fetch);
    events.on('changeContent', CommentBoxActions.changeContent);
    events.on('addComment', CommentBoxActions.addComment);
    React.render(<RootCommentComponent tree={tree} />, elem);
  };
