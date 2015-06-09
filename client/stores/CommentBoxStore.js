'use strict';
var Baobab = require('baobab');
var React = require('react/addons');

var tree = new Baobab({
  content: 'John',
  comments: []
}, {
  shiftReferences: true,
  mixins: [React.addons.PureRenderMixin]
});

module.exports = tree;
