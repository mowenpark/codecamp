class Api::CompaniesController < ApplicationController

  def index
    t = Company.arel_table
    p_tab = Program.arel_table
    name = params["name"].downcase
    location = params["location"].downcase
    @companies = Company.where(t[:name].matches("%#{name}%")).joins(:programs).where(p_tab[:location].matches("%#{location}%")).uniq
    render :index
  end

  def show
    @company = Company.find(params["id"])
    render :show
  end

end
