class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.create(user_id: current_user.id, program_id: params["id"].to_i)
    render :index
  end

end
