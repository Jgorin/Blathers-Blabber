class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  mount_uploader :profile_photo, PhotoUploader

  validates :username, uniqueness: true, presence: true

  has_many :reviews
  has_many :votes

  def admin?
    role == "admin"
  end
end