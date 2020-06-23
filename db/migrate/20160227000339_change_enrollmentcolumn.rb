class ChangeEnrollmentcolumn < ActiveRecord::Migration[4.2]
  def change
    rename_column :reviews, :employee_status, :enrollment_status
  end
end
