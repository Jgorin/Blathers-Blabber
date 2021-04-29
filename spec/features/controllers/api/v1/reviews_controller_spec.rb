require "rails_helper"

RSpec.describe Api::V1::ReviewsController, type: :controller do
  let!(:first_animal) { Animal.create(
    name: "hippo",
    body: "fat",
    rating: 5.0,
  ) }

  let!(:user1) { User.create(
    username: "josh",
    password: "111111",
    email: "jgorin@conncoll.edu",
    role: "admin"
  )}

  describe "POST#create" do
    it "creates a new review" do
      post_json = {
          title: "bad",
          description: "soo bad",
          rating: 1,
          animal: first_animal,
          user: user1
      }

      sign_in(user1)

      prev_count = Review.count
      post(:create, params: { :animal_id => first_animal.id, review: post_json }, format: :json)
      expect(Review.count).to eq(prev_count + 1)
    end

    it "returns the json of a the newly posted review" do
      post_json = {
          title: "bad",
          description: "soo bad",
          rating: 1,
          animal: first_animal,
          user: user1
      }

      sign_in(user1)

      post(:create, params: {:animal_id => first_animal.id, review: post_json}, format: :json)
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["review"]).to be_kind_of(Hash)
      expect(returned_json["review"]).to_not be_kind_of(Array)
      expect(returned_json["review"]["title"]).to eq "bad"
      expect(returned_json["review"]["description"]).to eq "soo bad"
    end
  end
end