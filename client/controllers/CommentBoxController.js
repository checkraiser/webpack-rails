var angular = require('angular');
var React = require('react');
var RootComponent = require('../components/RootComponent');
var tree = require('../stores/CommentBoxStore');
module.exports =
  angular.module('webpackrails',[])
  .controller('CommentBoxController',['$scope', function($scope){
  }])
  .directive('reactview', function(){
    return {
      restrict: 'A',
      link: function(scope, elem, attrs){
        React.render(<RootComponent tree={tree} />, elem[0]);
      }
    }
  });
