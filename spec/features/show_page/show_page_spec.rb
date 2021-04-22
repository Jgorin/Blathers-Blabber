require 'rails_helper'

feature 'user adds a new animal' do
  scenario 'user does not fill form and tries to submit' do
    visit new_animal_path

    click_button 'Add Animal'
    expect(page).to have_content("Name can't be blank")
    expect(page).to have_content("Body can't be blank")
  end
end