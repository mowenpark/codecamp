class Adduserinfo < ActiveRecord::Migration[4.2]
  def change
    add_column :users, :profile_pic, :string, default: "http://res.cloudinary.com/dtdgkk9aa/image/upload/c_crop,h_180,w_180/v1456770578/820C3ABDED_mrrhma_yaui0w.jpg"
    add_column :users, :bio, :text, null: false
    add_column :users, :location, :string, null: false
  end
end
