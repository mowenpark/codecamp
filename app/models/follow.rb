class Follow < ActiveRecord::Base
  validates :user_id, :program_id, presence: true
  validates_uniqueness_of :program_id, :scope => :user_id

  belongs_to :user

  belongs_to :program

end
