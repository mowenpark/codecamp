# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :text             not null
#  user_id    :integer          not null
#  program_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ActiveRecord::Base

  validates :title, :pros, :cons, :comments, :rating, :years_worked, presence: true

  belongs_to :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id

  belongs_to :program,
    class_name: "Program",
    foreign_key: :program_id,
    primary_key: :id

end
