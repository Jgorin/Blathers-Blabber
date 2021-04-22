require "rails_helper"

RSpec.describe AnimalsController, type: :controller do
  describe "POST#create" do
    it "creates a new Animal" do
      post_json = {
        animal: {
          name: "dog",
          body: "dope"
        }
      }

      prev_count = Animal.count
      post(:create, params: post_json, format: :json)
      expect(Animal.count).to eq(prev_count + 1)
      expect(Animal.where(name: "dog")).to exist
    end
  end
end