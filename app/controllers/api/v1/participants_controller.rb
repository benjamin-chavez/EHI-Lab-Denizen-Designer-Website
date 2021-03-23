# class Api::V1::ParticipantsController < ApplicationController
class Api::V1::ParticipantsController < ActionController::Base
  # skip_before_action :authenticate_user!

  def index
    @participants = Participant.all
    render json: @participants
  end

  def show
    participant = Participant.find(params[:id])
    render json: participant
  end

  private

  # Add for create method and permit more params
  # def particpant_params
  #   params.require(:participant).permit(:first_name, :last_name)
  # en
end
