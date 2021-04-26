class Api::V1::AnimalsController < ApiController
  def index
    render json: Animal.all
  end
  def show
    response = {}
    animal = Animal.find(params[:id])
    response["animal"] = animal
    response["reviews"] = animal.reviews
    render json: response
  end
end
