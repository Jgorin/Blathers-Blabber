class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :rating, :user, :votes

  has_many :votes
end