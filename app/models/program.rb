# == Schema Information
#
# Table name: programs
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  location    :string           not null
#  company_id  :integer
#

class Program < ActiveRecord::Base

  validates :title, :description, :location, presence: true

  has_many :reviews

  belongs_to :company

end
