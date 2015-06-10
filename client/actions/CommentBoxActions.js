'use strict';

var request = require('superagent');

var CommentBoxStore = require('../stores/CommentBoxStore');

module.exports = {
  changeContent: function(content){
    console.log(content);
    CommentBoxStore.set('content', content.data);
  },
  fetch: function(){
    CommentBoxStore.set('content', "Hello World 3");
    request.get('/api/comments')
      .end(function(err, res){
        CommentBoxStore.set('comments', res.body);
      });
  },
  addComment: function(comment){
    request.post('/api/comments')
      .send({author: comment.data.author, text: comment.data.text})
      .end(function(err, res){
        var commentsCursor = CommentBoxStore.select('comments');
        commentsCursor.push(res.body);
      })
  }
}
