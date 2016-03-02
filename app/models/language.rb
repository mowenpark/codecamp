class Language < ActiveRecord::Base
  validates :name, :program_id, presence: true

  belongs_to :program
end
