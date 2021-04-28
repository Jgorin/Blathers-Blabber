class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :body, :rating, :photo_path
end