class Animal < ApplicationRecord
  validates :name, presence: true
  validates :body, presence: true
  validates :rating, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 5 }
  mount_uploader :photo_path, PhotoUploader
end