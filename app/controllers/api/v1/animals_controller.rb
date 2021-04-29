class Api::V1::AnimalsController < ApiController
  def index
    render json: Animal.all
  end

  def show
    animal = Animal.find(params[:id])
    render json: animal, serializer: AnimalShowSerializer
  end
end
