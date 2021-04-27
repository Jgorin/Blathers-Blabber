class Api::V1::ReviewsController < ApiController
  def create
    response = JSON(request.body.read)
    newReview = response["newReview"]
    review = Review.new(
      title: newReview["title"], 
      description: newReview["description"], 
      rating: newReview["rating"],
      animal_id: params[:animal_id],
      user_id: params["userId"]
    )
    if review.save 
      render json: review
    else 
      render json: { error: review.errors.full_messages }
    end
  end
end

