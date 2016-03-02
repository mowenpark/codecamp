class Addlocationtocompany < ActiveRecord::Migration
  def change
    add_column :companies, :locations, :string, array: true , default: []
  end
end
