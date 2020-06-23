class Addlocationtocompany < ActiveRecord::Migration[4.2]
  def change
    add_column :companies, :locations, :string, array: true , default: []
  end
end
