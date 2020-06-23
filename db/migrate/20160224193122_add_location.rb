class AddLocation < ActiveRecord::Migration[4.2]
  def change
    add_column :programs, :location, :string, null: false
  end
end
