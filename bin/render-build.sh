#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
yarn install
bundle exec rake assets:precompile
bundle exec rake assets:clean

# Drop only Denizen Designer tables (preserve other projects in shared database)
echo "==> Dropping Denizen Designer tables..."
bundle exec rails runner "
  tables_to_drop = %w[participants quotes users active_storage_blobs active_storage_attachments active_storage_variant_records schema_migrations ar_internal_metadata]
  tables_to_drop.each do |table|
    begin
      ActiveRecord::Base.connection.execute(\"DROP TABLE IF EXISTS #{table} CASCADE\")
      puts \"Dropped #{table}\"
    rescue => e
      puts \"Note: #{e.message}\"
    end
  end
"

echo "==> Running migrations..."
bundle exec rake db:migrate

echo "==> Seeding database..."
bundle exec rake db:seed:all
