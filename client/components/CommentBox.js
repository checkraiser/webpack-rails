'use strict';

var React = require('react');
var CommentBoxStore = require('../stores/CommentBoxStore');
var CommentBoxActions = require('../actions/CommentBoxActions');
var mixin = require('baobab-react/mixins').branch;
var events = require('../utils/events');
var CommentList = require('./CommentList');
var CommentForm = require('./CommentForm');

var CommentBox = React.createClass({
  mixins: [mixin],

  cursors:{
    content: ['content'],
    comments: ['comments']
  } ,
  componentDidMount: function(){
    CommentBoxActions.fetch();
  },
  handleChange: function(event){
    CommentBoxActions.changeContent(event.target.value);
  },
  render: function() {
    return (
      <div className="commentBox">
        {this.state.content} from Dung
        <br/>
        <input type="text" ref="content" onChange={this.handleChange}></input>

        <CommentList comments={this.state.comments} />
        <CommentForm />
      </div>
    );
  }
});

module.exports = CommentBox;
