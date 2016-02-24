class Api::ProgramsController < ApplicationController

  def index
    @programs = Program.where("title LIKE ?", "%#{params["name"]}%")
    render :index
  end

  def new
  end

  def create
    @program = Program.new(program_params)
  end

  def show
    @program = Program.find(params[:id])
  end

  private

  def program_params
    params.require(:program).permit(:title, :description)
  end
end
