class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if user
      sign_in(user)
      flash[:errors] = "Welcome back!"
      redirect_to user_url(user)
    else
      flash.now[:errors] = "Credentials were incorrect, please try again."
      render :new
    end
  end

  def destroy
    sign_out
    redirect_to new_session_url
  end

end
