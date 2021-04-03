# class Api::V1::ParticipantsController < ApplicationController
class Api::V1::ParticipantsController < ActionController::Base
  # skip_before_action :authenticate_user!
  skip_before_action :verify_authenticity_token

  def index
    @participants = Participant.all
    render json: @participants
  end

  def show
    participant = Participant.find(params[:id])
    render json: participant
  end
  
  def update
    @participant = Participant.find(params[:id])
    @participant.update(participant_params)
    # render json: @participant

    if @participant.update(participant_params)
      render json: @participant
      # head(:ok)
    else
      head(:unprocessable_entity)
    end
  end

  def create
    @participant = Participant.create(participant_params)
    render json: @participant

    # @participant = Participant.new(participant_params)
    
    # @participant.save 
    # render json: @participant, status: :created
  end

  def destroy
    # @participant = Participant.find(params[:id])
    @participant = Participant.where(id: params[:id]).first
    @participant.destroy
      
    if @participant.destroy
      head(:ok)
    else
      head(:unprocessable_entity)
    end
  end

  private

  # Add for create method and permit more params
  def participant_params
    params.require(:participant).permit(:first_name, :last_name, :designer_type, :location_state, :location_city, :twitter, :instagram, :linkedin, :email, :website)
  end


  
end
