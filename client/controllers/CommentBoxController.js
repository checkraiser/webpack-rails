var React = require('react');
var RootComponent = require('../components/RootComponent');
var tree = require('../stores/CommentBoxStore');
var events = require('../utils/events');
var CommentBoxActions = require('../actions/CommentBoxActions');

module.exports =
  function(elem){
    events.on('fetch', CommentBoxActions.fetch);
    events.on('changeContent', CommentBoxActions.changeContent);
    events.on('addComment', CommentBoxActions.addComment);
    React.render(<RootComponent tree={tree} />, elem);
  };
