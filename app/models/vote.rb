class Vote < ApplicationRecord
  validates :isUpVote, inclusion: [true, false]

  belongs_to :user
  belongs_to :review
end