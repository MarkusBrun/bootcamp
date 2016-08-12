Rails.application.routes.draw do
  root 'blogs#index'

  resources :blogs, shallow: true do
    resources :posts do
      resources :comments
    end
  end

end
