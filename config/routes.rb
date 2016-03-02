Rails.application.routes.draw do

  root to: "static_pages#index"

  namespace :api, defaults: {format: :json} do
    resources :programs
    resources :reviews
    resources :companies
  end

  resource :session
  resources :users
end
