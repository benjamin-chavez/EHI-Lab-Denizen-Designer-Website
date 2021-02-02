class CreateParticipants < ActiveRecord::Migration[6.0]
  def change
    create_table :participants do |t|
      t.string :first_name
      t.string :last_name
      t.string :designer_type
      t.string :bio
      t.string :email
      t.boolean :interviewed

      t.timestamps
    end
  end
end
