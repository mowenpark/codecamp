class RemoveYearsWorked < ActiveRecord::Migration
  def change
    remove_column :reviews, :years_worked, :integer
  end
end
