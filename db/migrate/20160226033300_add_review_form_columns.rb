class AddReviewFormColumns < ActiveRecord::Migration[4.2]
  def change
    add_column :reviews, :employee_status, :boolean, null: false
    rename_column :reviews, :body, :pros
    add_column :reviews, :cons, :text, null: false
    add_column :reviews, :comments, :text, null: false
    add_column :reviews, :rating, :integer, null: false
    add_column :reviews, :years_worked, :integer, null: false
  end
end
