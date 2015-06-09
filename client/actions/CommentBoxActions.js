'use strict';

var request = require('superagent');

var CommentBoxStore = require('../stores/CommentBoxStore');
var contentCursor = CommentBoxStore.select("content");
var commentCursor = CommentBoxStore.select("comments");
module.exports = {
  changeContent: function(content){
    contentCursor.set('content', content);
  },
  fetch: function(){
    contentCursor.set('content', "Hello World 3");
    request.get('/api/comments')
            .end(function(err, res){
              console.log(res.body);
              commentCursor.set('comments', res.body);
            });
  }
}
