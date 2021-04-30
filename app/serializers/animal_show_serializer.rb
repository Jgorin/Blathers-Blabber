class AnimalShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :body, :current_user, :photo_path
  
  has_many :reviews
end