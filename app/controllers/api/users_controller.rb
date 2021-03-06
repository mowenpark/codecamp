# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Api::UsersController < ApplicationController

  def new
    @user = current_user
    last_week = Time.now - 7.days
    if current_user
      @feed = Review.where(:created_at => last_week..Time.now)
        .joins('LEFT OUTER JOIN follows ON reviews.program_id = follows.program_id')
        .where(:follows => {:user_id => current_user.id})
      render :new
    else
      render json: "You're not logged in!"
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render :new
    else
      render json: @user.errors.full_messages
    end
  end

  def show
    @user = User.find(params["id"])
    render :show
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      redirect_to user_url(@user)
    else
      flash.now[:errors] = @user.errors.full_messages
      render :edit
    end
  end

  private

  def user_params
    params.permit(:email, :password, :location, :bio, :name)
  end

end
