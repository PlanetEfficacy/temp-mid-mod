require 'rails_helper'

RSpec.describe "user signs in" do
  scenario "by entering email and password" do
    visit root_path
    click_link "Sign Up"
    fill_in "Email", with: "email@example.com"
    fill_in "Password", with: "password"
    fill_in "Password confirmation", with: "password"
    click_button "Sign Up"

    expect(current_path).to eq(links_path)
    expect(page).to have_content("email@example.com")
    expect(page).to have_link("Logout")
  end
end
