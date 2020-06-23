class CreateReviews < ActiveRecord::Migration[4.2]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.text :body, null: false

      t.integer :user_id, null: false
      t.integer :program_id, null: false

      t.timestamps null: false
    end

    add_index :reviews, :user_id
    add_index :reviews, :program_id
  end
end
