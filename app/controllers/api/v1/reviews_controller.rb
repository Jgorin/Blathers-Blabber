class Api::V1::ReviewsController < ApiController
  def create

    review = Review.new(review_params)
    review.user = current_user
    review.animal_id = params["animal_id"]

    if review.save
      render json: review
    else
      render json: { error: review.errors.full_messages }
    end
  end

  private

  def review_params
    params.require(:review).permit(:title, :description, :rating)
  end
end