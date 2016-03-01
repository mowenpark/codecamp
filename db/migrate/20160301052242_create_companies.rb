class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.string :name, null: false
      t.text :about, null: false

      t.timestamps null: false
    end
  end
end
