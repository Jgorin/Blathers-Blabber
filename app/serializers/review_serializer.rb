class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :rating, :user
  has_many :votes
end