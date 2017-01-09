require 'rails_helper'

RSpec.describe "user signs in" do
  scenario "and receives a flash message" do
    user = create :user
    visit login_path
    fill_in "Email", with: user.email
    fill_in "Password", with: "password"
    click_button "Sign In"

    expect(current_path).to eq(links_path)
    expect(page).to have_content("Successfully logged in!")
  end

  context "enters incorrect password" do
    scenario "and receives a flash message" do
      user = create :user
      visit login_path
      fill_in "Email", with: user.email
      fill_in "Password", with: "password1"
      click_button "Sign In"

      expect(current_path).to eq(login_path)
      expect(page).to have_content("Email and or password are not recognized.")
    end
  end

  context "enters incorrect email" do
    scenario "and receives a flash message" do
      user = create :user
      visit login_path
      fill_in "Email", with: "something@example.com"
      fill_in "Password", with: "password"
      click_button "Sign In"

      expect(current_path).to eq(login_path)
      expect(page).to have_content("Email and or password are not recognized.")
    end
  end

end
