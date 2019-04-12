Rails.application.routes.draw do
  scope '/api' do
    scope '/v1' do
      resources :recrutees do
        resources :timelines, only: [:index] do
          resources :timeline_items, only: [:index, :create]
        end
      end
    end
  end
end
