class Api::V1::AnimalsController < ApiController
  def index
    render json: Animal.all
  end
end
