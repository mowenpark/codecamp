class Api::CompaniesController < ApplicationController

  def index
    t = Company.arel_table
    name = params["name"].downcase
    @companies = []
    @possible_companies = Company.where(t[:name].matches("%#{name}%"))


    render :index
  end

end
