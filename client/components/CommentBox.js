'use strict';

var React = require('react');
var CommentBoxStore = require('../stores/CommentBoxStore');
var mixin = require('baobab-react/mixins').branch;
var events = require('../utils/events');
var CommentList = require('./CommentList');
var CommentForm = require('./CommentForm');

var CommentBox = React.createClass({
  mixins: [mixin],

  cursors:{
    content: ['content'],
    comments: ['comments']
  },
  getDefaultProps: function(){
    return {
      pollInterval: 2000
    }
  },
  componentDidMount: function(){
    //CommentBoxActions.fetch();
    events.emit('fetch', null);
    //setInterval(function(){ events.emit('fetch', null); }, this.props.pollInterval);
  },
  handleChange: function(event){
    //CommentBoxActions.changeContent(event.target.value);
    events.emit('changeContent', event.target.value);
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
