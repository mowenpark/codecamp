class Removelogoaddcompid < ActiveRecord::Migration
  def change
    remove_column :programs, :logo, :string
    add_column :programs, :company_id, :integer
  end
end
