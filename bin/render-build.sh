#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
yarn install
bundle exec rake assets:precompile
bundle exec rake assets:clean
# Fresh database setup
echo "==> Setting up database..."
bundle exec rake db:drop db:create db:migrate db:seed:all
