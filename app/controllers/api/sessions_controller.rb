class Api::SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by_credentials(params["email"], params["password"])
    if @user
      sign_in(@user)
      redirect_to api_user_url(@user)
    else
      flash.now[:errors] = "Oh snap! Your credentials were incorrect, please try again."
      render :new
    end
  end

  def destroy
    sign_out
    render :new
  end

end
