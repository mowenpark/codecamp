class RemoveYearsWorked < ActiveRecord::Migration[4.2]
  def change
    remove_column :reviews, :years_worked, :integer
  end
end
