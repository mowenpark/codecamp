class Follow < ActiveRecord::Base
  validates :user_id, :program_id, presence: true

  belongs_to :user

  belongs_to :program
  
end
