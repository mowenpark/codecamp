class Api::LanguagesController < ApplicationController

  def index
    t = Program.arel_table
    l_tab = Language.arel_table
    name = params["name"].downcase
    location = params["location"].downcase
    @programs = Program.where(t[:location].matches("%#{location}%")).joins(:languages).where(l_tab[:name].matches("%#{name}%")).uniq
    render :index
  end

end
