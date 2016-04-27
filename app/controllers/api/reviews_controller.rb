class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.where(program_id: params["program_id"])
    render :index
  end

  def create
    @review = Review.new(review_params)
    if current_user
      @review.user_id = current_user.id
    else
      return render json: "You must be logged in to leave a review!"
    end

    if @review.save
      render :new
    else
      render json: @review.errors.full_messages
    end
  end

  private

  def review_params
    params.permit(:title,
    :pros,
    :cons,
    :comments,
    :rating,
    :enrollment_status,
    :program_id)
  end

end
