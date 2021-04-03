Rails.application.routes.draw do
  devise_for :users
  # get 'pages/home'
  root to: 'pages#home'
  # # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # get 'dashboard', to: 'pages#dashboard'

  get 'dashboard', to: 'pages#home'
  get 'dashboard/newparticipant', to: 'pages#home'
  get 'dashboard/editparticipant/:id', to: 'pages#home'
  

  get "/historyofparticipatorydesign", to: 'pages#home'
  get "/historyofparticipatorydesign/", to: 'pages#home'
  get "/historyofparticipatorydesign/timeline", to: 'pages#home'
  get "/historyofparticipatorydesign/datavisualization", to: 'pages#home'
  get "/historyofparticipatorydesign/repositoryofpapers", to: 'pages#home'

  get "/denizendesigner", to: 'pages#home' 
  get "/denizendesigner/", to: 'pages#home' 
  get "/denizendesigner/home", to: 'pages#home' 
  get "/denizendesigner/interviews", to: 'pages#home' 
  get "/denizendesigner/interviews/:id", to: 'pages#home' 
  get "/denizendesigner/report", to: 'pages#home' 
  get "/denizendesigner/designerdatabase", to: 'pages#home' 
  get "/denizendesigner/designerdatabase/:city", to: 'pages#home'    # update this to be #city once you link navigation to the navbar
  get "/denizendesigner/quotes", to: 'pages#home' 
  get "/denizendesigner/quotes/:quoteCategory", to: 'pages#home' 
  get "/denizendesigner/quotes/quotes", to: 'pages#home' 
  get "/denizendesigner/resources", to: 'pages#home' 

  # API
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      # TODO
      resources :participants, only: [ :index, :show, :update, :create, :destroy ]
      resources :quotes, only: [ :index, :show ]
      resources :sessions, only: [ :create, :destroy ]
    end
  end
end
