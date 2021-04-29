Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  resources :animals, only: [:new, :create]

  get '/animals', to: 'static_pages#index'
  get '/animals/:id', to: 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :animals, only: [:index, :show] do
        resources :reviews, only: [:create] do
          resources :votes, only: [:create]
        end
      end
    end
  end
end
