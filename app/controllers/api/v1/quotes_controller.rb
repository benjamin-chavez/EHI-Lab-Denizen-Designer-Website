class Api::V1::QuotesController < ApplicationController
  
  def index
    @quotes = Quote.all
    render json: @quotes
  end

  def show
    # participant = Participant.find(params[:id])
    quote = Quote.find(params[:id])
    render json: quote
  end

  private

  # Add for create method and permit more params
  # def particpant_params
  #   params.require(:participant).permit(:first_name, :last_name)
  # en
end
