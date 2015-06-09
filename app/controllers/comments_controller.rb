class CommentsController < ApplicationController

  def index
    data = [
      {author: "Pete Hunt", text: "This is one comment"},
      {author: "Jordan Walke", text: "This is *another* comment"}
    ];
    render :json => data
  end
end
