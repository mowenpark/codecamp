class Api::ReviewsController < ApplicationController

  def index
    id = params["program_id"].to_i
    @reviews = Review.where(program_id: params["program_id"])
  end

  def create
    :redirect_session if current_user.nil?
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    if @review.save
      flash.now[:success] = "Review added!"
      render :new
    else
      flash.now[:errors] = @review.errors.full_messages
    end
  end

  def destroy
  end

  private

  def review_params
    params.permit(:title, :body, :program_id)
  end

end
