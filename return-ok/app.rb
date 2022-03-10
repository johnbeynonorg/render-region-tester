# myapp.rb
require 'sinatra'
require 'sinatra/cors'

set :allow_origin, "*"

get '/' do
  "Hello from #{ENV['REGION']}"
end