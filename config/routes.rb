Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/animals', to: "homes#index"

end
