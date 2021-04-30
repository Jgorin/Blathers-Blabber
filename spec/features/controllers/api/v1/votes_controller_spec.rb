require "rails_helper"

RSpec.describe Api::V1::VotesController, type: :controller do
  let!(:first_animal) { Animal.create(
    name: "hippo",
    body: "fat"
  ) }

  let!(:user1) { User.create(
    username: "josh",
    password: "111111",
    email: "jgorin@conncoll.edu",
    role: "admin"
  )}

  let!(:review) { Review.create(
    title: "bad",
    description: "soo bad",
    rating: 1,
    animal: first_animal,
    user: user1
  )}

  describe "POST#create" do
    it "creates a new vote" do
      sign_in(user1)

      prev_count = Vote.count
      post(:create, 
        params: { 
          :animal_id => first_animal.id, 
          :reviewId => review.id, 
          :review_id => review.id, 
          :userId => user1.id, 
          :isUpVote => true
        }, 
        format: :json)
      expect(Vote.count).to eq(prev_count + 1)
    end

    it "returns the json of a the newly posted vote" do
      sign_in(user1)

      post(:create, 
        params: { 
          :animal_id => first_animal.id, 
          :reviewId => review.id, 
          :review_id => review.id, 
          :userId => user1.id, 
          :isUpVote => true
        }, 
        format: :json)

      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["vote"]).to be_kind_of(Hash)
      expect(returned_json["vote"]).to_not be_kind_of(Array)
      expect(returned_json["vote"]["isUpVote"]).to eq true
    end
  end
end