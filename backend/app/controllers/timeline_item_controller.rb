class TimelineItemController < ApplicationController
  def create
    t = Recrutee.find(params[:recrutee_id]).timeline

    type = params[:type]
    case type
    when 'status_update'
      @item = StatusUpdate.create!(
        timeline: t,
        created_by: "Anonymous Panda",
        text: params[:status]
      )

    when 'interview_meeting'
      @item = InterviewMeeting.create!(
        timeline: t,
        created_by: "Anonymous Panda",
        date_time: Time.now,
        location_url: params[:location_url]
      )

    when 'interview_date_time_picker'
      @item = InterviewDateTimePicker.create!(
        timeline: t,
        created_by: "Anonymous Panda",
        is_set: params[:is_set],
        date_time: Time.now
      )
    end

  end

  def index
    r = Recrutee.find(params[:recrutee_id])
    @items = TimelineItem.where(timeline: r[:timeline]).all
    render json: @items
  end

end
