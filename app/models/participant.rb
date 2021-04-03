class Participant < ApplicationRecord
  # has_one_attached :photo
  has_many :quotes, dependent: :destroy

  validates :first_name, presence: true
  validates :last_name, presence: true
end
 