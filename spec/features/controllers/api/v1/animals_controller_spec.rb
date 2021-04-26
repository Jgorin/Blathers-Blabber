require "rails_helper"

RSpec.describe Api::V1::AnimalsController, type: :controller do
  let!(:first_animal) { Animal.create(
    name: "hippo",
    body: "fat",
    rating: 5.0,
    photo_path: "./spec/support/images/photo.png"
  ) }
  let!(:second_animal) { Animal.create(
    name: "penguin",
    body: "frosty",
    rating: 4.8,
    photo_path: "./spec/support/images/photo.png"
  ) }

  let!(:user1) {User.create(
    username: "josh",
    password: "111111",
    email: "jgorin@conncoll.edu"
  )}

  let!(:review) {Review.create(
    title: "bad",
    description: "soo bad",
    rating: 1,
    animal: first_animal,
    user: user1
  )}


  describe "GET#index" do
    it "should return a list of all the animals" do
      get :index
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")


      expect(returned_json[0]["name"]).to eq "hippo"
      expect(returned_json[0]["body"]).to eq "fat"
      expect(returned_json[0]["rating"]).to eq 5.0

      expect(returned_json.length).to eq 2
      expect(returned_json[1]["name"]).to eq "penguin"
      expect(returned_json[1]["body"]).to eq "frosty"
      expect(returned_json[1]["rating"]).to eq 4.8

    end
  end

  describe "GET#show" do
    it "should return an individual animal with all its attributes" do

      get :show, params: {id: first_animal.id}
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      # binding.pry
      expect(returned_json["animal"]["name"]).to eq first_animal.name
      expect(returned_json["animal"]["body"]).to eq first_animal.body
      expect(returned_json["animal"]["rating"]).to eq first_animal.rating
      expect(returned_json["reviews"][0]["description"]).to eq review.description
    end
  end
end