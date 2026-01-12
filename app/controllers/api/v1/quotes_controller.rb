# API controller now returns static data - no database queries
class Api::V1::QuotesController < ActionController::Base
  skip_before_action :verify_authenticity_token

  def index
    # Return empty array - frontend uses static data now
    render json: []
  end

  def show
    render json: {}
  end
end
