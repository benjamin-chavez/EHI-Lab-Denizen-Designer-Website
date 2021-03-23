Rails.application.routes.draw do
  # get 'pages/home'
  root to: 'pages#home'
  # # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/historyofparticipatorydesign/timeline", to: 'pages#home'
  get "/historyofparticipatorydesign/timeline", to: 'pages#home'
  get "/historyofparticipatorydesign/timeline", to: 'pages#home'

  get "/denizendesigner/home", to: 'pages#home' 
  get "/denizendesigner/interviews", to: 'pages#home' 
  get "/denizendesigner/interviews/:id", to: 'pages#home' 
  get "/denizendesigner/report", to: 'pages#home' 
  get "/denizendesigner/designerdatabase", to: 'pages#home' 
  get "/denizendesigner/designerdatabase/DT", to: 'pages#home'    # update this to be #city once you link navigation to the navbar
  get "/denizendesigner/quotes", to: 'pages#home' 
  get "/denizendesigner/resources", to: 'pages#home' 

  # API
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      # TODO
      resources :participants, only: [ :index, :show ]
    end
  end
end
