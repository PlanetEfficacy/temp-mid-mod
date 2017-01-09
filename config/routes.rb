Rails.application.routes.draw do
  root to: 'sessions#new'

  post '/login', to: 'sessions#create'

  resources :links, only: [:index]
  resources :users, only: [:new, :create]

  namespace :api do
    namespace :v1 do
      resources :links, only: [:create]
    end
  end
end
