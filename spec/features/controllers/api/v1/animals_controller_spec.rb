require "rails_helper"

RSpec.describe Api::V1::AnimalsController, type: :controller do
  let!(:first_animal) { Animal.create(
    name: "hippo",
    body: "fat",
    rating: 5.0
  ) }
  let!(:second_animal) { Animal.create(
    name: "penguin",
    body: "frosty",
    rating: 4.8
  ) }


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

      expect(returned_json["name"]).to eq first_animal.name
      expect(returned_json["body"]).to eq first_animal.body
      expect(returned_json["rating"]).to eq first_animal.rating
    end
  end
end