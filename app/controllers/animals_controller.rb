class AnimalsController < ApplicationController

  def index 
    @animals = Animal.all 
    render "home/index"
  end
end