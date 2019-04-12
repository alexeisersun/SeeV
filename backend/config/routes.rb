Rails.application.routes.draw do
  scope '/api' do
    scope '/v1' do
      resources :recrutee do
        # resources :timeline, only: [:index]
        resources :timeline_item, only: [:index, :create]
      end
    end
  end
end
