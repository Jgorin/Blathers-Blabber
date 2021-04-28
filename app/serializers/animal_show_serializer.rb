class AnimalShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :body, :rating, :current_user, :photo_path
  has_many :reviews
end