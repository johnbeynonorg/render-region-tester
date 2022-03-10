# myapp.rb
require 'sinatra'
require 'rack/cors'

use Rack::Cors do |config|
  config.allow do |allow|
    allow.origins '*'
  end
end

get '/' do
  "Hello from #{ENV['REGION']}"
end