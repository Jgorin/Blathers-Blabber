class VoteSerializer < ActiveModel::Serializer
  attributes :id, :user, :review
  
  belongs_to :review
  belongs_to :user
end