# myapp.rb
require 'sinatra'
require 'sinatra/cors'

set :allow_origin, "*"
set :allow_methods, "GET,HEAD,POST"

get '/' do
  "Hello from #{ENV['REGION']}"
end