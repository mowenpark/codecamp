# == Schema Information
#
# Table name: companies
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  about      :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  logo       :string
#

class Company < ActiveRecord::Base
  validates :name, :about, :logo, presence: true

  has_many :programs

end
