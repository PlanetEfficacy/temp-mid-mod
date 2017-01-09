Rails.application.routes.draw do
  root to: 'sessions#new'

  resources :links, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :links, only: [:create]
    end
  end
end
