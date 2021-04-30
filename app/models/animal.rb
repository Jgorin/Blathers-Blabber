class Animal < ApplicationRecord
  validates :name, presence: true
  validates :body, presence: true
  
  has_many :reviews
  mount_uploader :photo_path, PhotoUploader
end