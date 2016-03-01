# == Schema Information
#
# Table name: reviews
#
#  id                :integer          not null, primary key
#  title             :string           not null
#  pros              :text             not null
#  user_id           :integer          not null
#  program_id        :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  enrollment_status :boolean          not null
#  cons              :text             not null
#  comments          :text             not null
#  rating            :integer          not null
#

class Review < ActiveRecord::Base

  validates :title, :pros, :cons, :comments, :rating, :enrollment_status, presence: true

  belongs_to :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id

  belongs_to :program,
    class_name: "Program",
    foreign_key: :program_id,
    primary_key: :id

end
