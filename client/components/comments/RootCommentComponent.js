'use strict';

var React = require('react');
var mixin = require('baobab-react/mixins').root;
var CommentBox = require('./CommentBox');


var RootCommentComponent = React.createClass({
  mixins: [mixin],
  render: function() {
    return (
      <div className="rootComponent">
        <CommentBox />
      </div>
    );
  }
});

module.exports = RootCommentComponent;
