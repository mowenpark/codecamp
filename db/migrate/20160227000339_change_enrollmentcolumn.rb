class ChangeEnrollmentcolumn < ActiveRecord::Migration
  def change
    rename_column :reviews, :employee_status, :enrollment_status
  end
end
