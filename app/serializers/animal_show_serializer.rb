class AnimalShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :body, :rating, :current_user, :photo_path
  # def reviews 
  #   object.reviews
  # end

  # def user 
  #   current_user.id 
  # end
  
  
  has_many :reviews
  # attributes :animal, :reviews, :user

end