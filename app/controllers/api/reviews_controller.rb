class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.where(program_id: params["program_id"])
    render :index
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id if current_user
    if @review.save
      flash.now[:success] = "Review added!"
      render :new
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
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
