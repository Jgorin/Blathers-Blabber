require 'rails_helper'

feature 'user adds a new animal' do
  scenario 'user fills out form and clicks add animal' do
    visit new_animal_path

    fill_in "Name", with: "Panda"
    fill_in "Description", with: "cute"

    prev_count = Animal.count

    click_button 'Add Animal'
    expect(page).to have_content("Animal added successfully")
    expect(Animal.count).to eq(prev_count + 1)
    expect(Animal.where(name: "Panda")).to exist
  end

  scenario 'user does not fill form and tries to submit' do
    visit new_animal_path

    click_button 'Add Animal'
    expect(page).to have_content("Name can't be blank")
    expect(page).to have_content("Body can't be blank")
  end
end