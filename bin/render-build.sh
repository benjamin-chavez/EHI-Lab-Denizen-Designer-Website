#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
yarn install
bundle exec rake assets:precompile
bundle exec rake assets:clean

# NOTE: Database operations removed - app now uses static JSON data
# No migrations or seeding needed
echo "==> Build complete (no database operations)"
