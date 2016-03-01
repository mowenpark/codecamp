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

require 'test_helper'

class CompanyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
