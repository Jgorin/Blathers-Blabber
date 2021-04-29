class Api::V1::VotesController < ApiController
  def create
    vote = Vote.new(vote_params)
    if vote.save
      render json: vote
    else
      render json: { errors: vote.errors.full_messages.to_sentence }
    end
  end

  private

    def vote_params
      binding.pry
      params.require(:vote).permit(:isPositive, :userId, :reviewId)
    end
end