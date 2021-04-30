class Vote < ApplicationRecord
  validates :isUpVote, presence: true
  
  belongs_to :user
  belongs_to :review
end