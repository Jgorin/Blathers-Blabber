Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  resources :animals, only: [:new, :create, :index, :show]

  namespace :api do
    namespace :v1 do
      resources :animals, only: [:index, :show]
    end
  end
end
