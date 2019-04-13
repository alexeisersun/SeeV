class RecruteeController < ApplicationController
  def index
    @recrutees = Recrutee.all
    render json: @recrutees
  end

  def show
    begin
      @recrutee = Recrutee.find(params[:id])
      render json: @recrutee
    rescue Mongoid::Errors::DocumentNotFound=> e
      render json: {error: "Error"}, status: :not_found
    end
     
  end

  def create
    recrutee = Recrutee.new(recrutee_params)
    recrutee.save!
    @timeline = Timeline.create!(
      recrutee: recrutee,
      created_at: Time.now,
      timeline_items: nil
    )
  end

  def destroy
    Recrutee.where(id: params[:id]).destroy_all
  end

  def update
  end


  private
  def recrutee_params
    params.require(:recrutee).permit(:name, :email, :phone, :surname)
  end
end