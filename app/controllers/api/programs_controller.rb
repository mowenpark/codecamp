class Api::ProgramsController < ApplicationController

  def index
    t = Program.arel_table
    title = params["name"].downcase
    location = params["location"].downcase
    @programs = Program.where(t[:title].matches("%#{title}%")).where(t[:location].matches("%#{location}%")).includes(:languages)
    render :index
  end

  def new
    @locations = Program.all.pluck(:location).uniq
    render :new
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
