require 'rails_helper'

feature 'user adds a new animal' do
  scenario 'user fills out form and clicks add animal' do
    user = User.create!(
      username: "josh",
      password: "111111",
      email: "jgorin@conncoll.edu",
      role: "admin"
    )

    login_as(user, :scope => :user)

    visit new_animal_path

    fill_in "Name", with: "Panda"
    fill_in "Description", with: "cute"
    attach_file :animal_photo_path, "#{Rails.root}/spec/support/images/photo.png"

    prev_count = Animal.count

    click_button 'Add Animal'
    expect(page).to have_content("Animal added successfully")
    expect(Animal.count).to eq(prev_count + 1)
    expect(Animal.where(name: "Panda")).to exist
  end

  scenario 'user does not fill form and tries to submit' do
    user = User.create!(
      username: "josh",
      password: "111111",
      email: "jgorin@conncoll.edu",
      role: "admin"
    )

    login_as(user, :scope => :user)

    visit new_animal_path

    click_button 'Add Animal'
    expect(page).to have_content("Name can't be blank")
    expect(page).to have_content("Body can't be blank")
  end
end