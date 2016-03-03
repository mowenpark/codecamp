Rails.application.routes.draw do

  root to: "static_pages#index"

  namespace :api, defaults: {format: :json} do
    resources :programs
    resources :reviews
    resources :companies
    resource :session
    resources :users
    resources :languages
  end

end
