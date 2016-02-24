class Api::ProgramsController < ApplicationController

  def index
    t = Program.arel_table
    title = params["name"].downcase
    @programs = Program.where(t[:title].matches("%#{title}%"))
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
