class AddLocation < ActiveRecord::Migration
  def change
    add_column :programs, :location, :string, null: false
  end
end
