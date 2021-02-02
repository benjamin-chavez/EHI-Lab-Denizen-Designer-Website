class CreateQuotes < ActiveRecord::Migration[6.0]
  def change
    create_table :quotes do |t|
      t.text :quote_body
      t.string :first_name
      t.string :last_name
      t.integer :category

      t.timestamps
    end
  end
end
