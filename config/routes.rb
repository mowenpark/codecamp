Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "static_pages#index"

  namespace :api, defaults: {format: :json} do
    resources :programs
    resources :reviews
    resources :companies
    resource :session
    resources :users
    resources :languages
    resources :follows
  end
end
