class VoteSerializer < ActiveModel::Serializer
  attributes :id, :user, :review
  # belongs_to :review
end