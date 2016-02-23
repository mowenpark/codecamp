class ProgramsController < ApplicationController

  def new
  end

  def create
    @program = Program.new(program_params)
    if @program.save
      redirect_to program_url(@program)
      flash[:messages] = "Program created!"
    else
      flash.now[:errors] = @program.errors.full_messages
      render :new
    end
  end

  def show
    @program = Program.find(params[:id])
  end

  private

  def program_params
    params.require(:program).permit(:title, :description)
  end
end
