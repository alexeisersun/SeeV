class TimelineController < ApplicationController
  def index
  	@timeline = Timeline.find(param[:id])
  	render json: @post
  end
end
