class Api::V1::VotesController < ApiController
  def create
    vote = Vote.new( 
      user_id: params[:userId], 
      review_id: params[:reviewId], 
      isUpVote: params[:isUpVote]
    )
    if vote.save
      render json: vote
    else
      render json: { errors: vote.errors.full_messages.to_sentence }
    end
  end

  private
end