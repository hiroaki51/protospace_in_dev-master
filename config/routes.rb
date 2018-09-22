Rails.application.routes.draw do
  devise_for :users
  root 'prototypes#index'

  get '/prototypes/newest', to: 'prototypes#newest'
  resources :prototypes do
    resources :captured_images, only: [:create, :update, :destroy]
    resources :prototype_likes, only: [:index, :create, :destroy]
  end
  resources :users, only: [:show, :edit, :update]
end
