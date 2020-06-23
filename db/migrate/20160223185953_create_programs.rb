class CreatePrograms < ActiveRecord::Migration[4.2]
  def change
    create_table :programs do |t|
      t.string :title, null: false
      t.text :description, null: false

      t.timestamps null: false
    end
  end
end
