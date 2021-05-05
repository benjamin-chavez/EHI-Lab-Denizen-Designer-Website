class AddCategoriesToQuote < ActiveRecord::Migration[6.0]
  def change
    add_column :quotes, :categories, :integer, array: true, default: []
  end
end
