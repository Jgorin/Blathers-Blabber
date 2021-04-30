class VoteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :review_id, :isUpVote
  
  belongs_to :review
  belongs_to :user
end