class AddProgramLogo < ActiveRecord::Migration[4.2]
  def change
    add_column :programs, :logo, :string, null: false
  end
end
