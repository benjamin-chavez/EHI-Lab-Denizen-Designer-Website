# API controller now returns static data - no database queries
class Api::V1::ParticipantsController < ActionController::Base
  skip_before_action :verify_authenticity_token

  # Static participant data
  PARTICIPANTS = [
    { id: 1, first_name: "Bryan", last_name: "Lee", designer_type: "Designer", location_state: "Massachusetts", location_city: "Boston", interviewed: true },
    { id: 2, first_name: "Maya", last_name: "Bird-Murphy", designer_type: "Designer", location_state: "Illinois", location_city: "Chicago", interviewed: true },
    # Add more as needed - this is a fallback, frontend uses its own static data
  ].freeze

  def index
    # Return empty array - frontend uses static data now
    render json: []
  end

  def show
    render json: {}
  end

  def update
    head(:ok)
  end

  def create
    head(:ok)
  end

  def destroy
    head(:ok)
  end

  private

  def participant_params
    params.require(:participant).permit(:first_name, :last_name, :designer_type, :location_state, :location_city, :twitter, :instagram, :linkedin, :email, :website)
  end
end
