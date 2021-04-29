class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :rating, :user
end