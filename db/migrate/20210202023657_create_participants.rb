class CreateParticipants < ActiveRecord::Migration[6.0]
  def change
    create_table :participants do |t|
      t.string :first_name
      t.string :last_name
      t.string :designer_type
      t.string :location_state
      t.string :location_city
      t.string :bio
      t.string :twitter
      t.string :instagram
      t.string :linkedin
      t.string :email
      t.string :website

      t.timestamps
    end
  end
end

