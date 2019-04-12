Rails.application.routes.draw do
  scope '/api' do
    scope '/v1' do
      resources :recrutee do
        resources :timeline, only: [:index] do
          resources :timeline_item, only: [:create]
        end
      end
    end
  end
end
