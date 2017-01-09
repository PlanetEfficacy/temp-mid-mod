Rails.application.routes.draw do
  root to: 'sessions#new'

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  post '/logout', to: 'sessions#destroy'


  resources :links, only: [:index]
  resources :users, only: [:new, :create]

  namespace :api do
    namespace :v1 do
      resources :links, only: [:create]
    end
  end
end
