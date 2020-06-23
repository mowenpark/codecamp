class Addlogo < ActiveRecord::Migration[4.2]
  def change
    add_column :companies, :logo, :string
  end
end
