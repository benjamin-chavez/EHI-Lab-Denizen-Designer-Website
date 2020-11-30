Rails.application.routes.draw do
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/denizendesigner/home", to: 'pages#home' 
  get "/denizendesigner/interviews", to: 'pages#home' 
  get "/denizendesigner/interviews/:id", to: 'pages#home' 
  get "/denizendesigner/report", to: 'pages#home' 
  get "/denizendesigner/designerdatabase", to: 'pages#home' 
  get "/denizendesigner/quotes", to: 'pages#home' 
  get "/denizendesigner/resources", to: 'pages#home' 
end
