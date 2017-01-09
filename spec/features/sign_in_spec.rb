require 'rails_helper'

RSpec.describe "user signs in" do
  scenario "and receives a flash message" do
    user = create :user
    visit login_path
    fill_in "Email", with: user.email
    fill_in "Password", with: user.password
    click_button "Sign In"

    expect(current_path).to eq(links_path)
    expect(page).to have_content("Successfully logged in!")
  end
end
