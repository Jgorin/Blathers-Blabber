class Api::V1::AnimalsController < ApiController
  def index
    render json: Animal.all
  end
  def show
    render json: Animal.find(params[:id])
  end
end
