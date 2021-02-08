Rails.application.routes.draw do
  root to: 'pages#index'

  resources :products, only: %i[show index] do
    member do
      post :add_to_cart
    end

    collection do
      get :cart
    end
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
