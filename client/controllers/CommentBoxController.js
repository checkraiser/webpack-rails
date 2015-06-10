var angular = require('angular');
var React = require('react');
var RootComponent = require('../components/RootComponent');
var tree = require('../stores/CommentBoxStore');
var events = require('../utils/events');
var CommentBoxActions = require('../actions/CommentBoxActions');

module.exports =
  angular.module('webpackrails',[])
  .controller('CommentBoxController',['$scope', function($scope){
    events.on('fetch', CommentBoxActions.fetch);
    events.on('changeContent', CommentBoxActions.changeContent);
    events.on('addComment', CommentBoxActions.addComment);
  }])
  .directive('reactview', function(){
    return {
      restrict: 'A',
      link: function(scope, elem, attrs){
        React.render(<RootComponent tree={tree} />, elem[0]);
      }
    }
  });
