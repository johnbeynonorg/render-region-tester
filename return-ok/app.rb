# myapp.rb
require 'sinatra'

get '/' do
  "Hello from #{ENV['REGION']}"
end