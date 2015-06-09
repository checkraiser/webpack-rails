'use strict';

var React = require('react');
var CommentBoxStore = require('../stores/CommentBoxStore');
var mixin = require('baobab-react/mixins').root;
var CommentBox = require('./CommentBox');
var RootComponent = React.createClass({
  mixins: [mixin],
  render: function() {
    return (
      <div className="rootComponent">
        <CommentBox />
      </div>
    );
  }
});

module.exports = RootComponent;
