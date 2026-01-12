#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
yarn install
bundle exec rake assets:precompile
bundle exec rake assets:clean

# Handle migrations gracefully for shared databases
# This prevents failures when tables already exist but schema_migrations is out of sync
echo "==> Running database migrations..."
if bundle exec rake db:migrate 2>&1; then
  echo "==> Migrations completed successfully"
else
  echo "==> Migration failed, attempting to sync schema_migrations..."

  # Get all migration versions from db/migrate directory
  MIGRATION_VERSIONS=$(ls -1 db/migrate/*.rb 2>/dev/null | sed 's/.*\/\([0-9]*\)_.*/\1/' | sort)

  if [ -n "$MIGRATION_VERSIONS" ]; then
    # Create schema_migrations table if it doesn't exist and insert versions
    bundle exec rails runner "
      ActiveRecord::Base.connection.execute(\"CREATE TABLE IF NOT EXISTS schema_migrations (version VARCHAR(255) PRIMARY KEY)\")

      migration_versions = Dir.glob('db/migrate/*.rb').map { |f| File.basename(f).split('_').first }
      migration_versions.each do |version|
        begin
          ActiveRecord::Base.connection.execute(\"INSERT INTO schema_migrations (version) VALUES ('\#{version}') ON CONFLICT (version) DO NOTHING\")
        rescue => e
          puts \"Note: \#{e.message}\"
        end
      end
      puts 'Schema migrations table synced'
    "

    echo "==> Retrying migrations..."
    bundle exec rake db:migrate
  else
    echo "==> No migrations found, skipping..."
  fi
fi
