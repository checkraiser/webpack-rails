class CommentsController < ApplicationController

  def index
    data = [
      {author: "Pete Hunt", text: "This is one comment"},
      {author: "Jordan Walke", text: "This is *another* comment"},
      {author: "Jordan Walke 2", text: "This is *another* comment 5"}
    ];
    render :json => data
  end

  def create
    render :json => {author: comment_params[:author].upcase, text: comment_params[:text].downcase}
  end
  private
  def comment_params
    params
  end
end
