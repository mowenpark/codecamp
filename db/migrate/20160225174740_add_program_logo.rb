class AddProgramLogo < ActiveRecord::Migration
  def change
    add_column :programs, :logo, :string, null: false
  end
end
