class AnimalsController < ApplicationController
  def new
    @animal = Animal.new
  end

  def create
    @animal = Animal.new(animals_params)

    if @animal.save
      flash[:success] = "Animal added successfully"
      redirect_to "/animals/#{@animal.id}"
    else
      flash.now[:error] = @animal.errors.full_messages.to_sentence
      render :new
    end
  end

  private

  def animals_params
    params.require(:animal).permit(:name, :body, :photo_path)
  end
end