class Api::ReviewsController < ApplicationController

  def index
    id = params["program_id"].to_i
    debugger
    @reviews = Review.where(program_id: params["program_id"])
  end

  def create
  end

  def destroy
  end

end
