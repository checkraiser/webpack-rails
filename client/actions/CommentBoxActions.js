'use strict';

var request = require('superagent');

var CommentBoxStore = require('../stores/CommentBoxStore');

module.exports = {
  changeContent: function(content){
    contentCursor.set('content', content);
  },
  fetch: function(){
    CommentBoxStore.set('content', "Hello World 3");
    request.get('/api/comments')
      .end(function(err, res){
        CommentBoxStore.set('comments', res.body);
      });
  }
}
