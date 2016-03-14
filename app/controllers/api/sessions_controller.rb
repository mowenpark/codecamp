class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params["email"], params["password"])
    if @user
      sign_in(@user)
      last_week = Time.now - 7.days
      @feed = Review.where(:created_at => last_week..Time.now)
        .joins('LEFT OUTER JOIN follows ON reviews.program_id = follows.program_id')
        .where(:follows => {:user_id => current_user.id})
      render :new
    else
      render json: "Incorrect password or email. Please try again <3"
    end
  end

  def destroy
    sign_out
    render json: "Signout successful!"
  end

end
