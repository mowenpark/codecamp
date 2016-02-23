class Api::ProgramsController < ApplicationController

  def index
    debugger
    @programs = Program.where("title LIKE ?", "%#{params[:programs][:title]}%")
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
