class VoteSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user
  belongs_to :review
end