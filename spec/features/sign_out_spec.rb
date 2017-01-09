require 'rails_helper'

RSpec.describe "user signs out" do
  scenario "and is redirected back to login screen" do
    user = create :user
    visit login_path
    fill_in "Email", with: user.email
    fill_in "Password", with: "password"
    click_button "Sign In"

    expect(page).to have_content("Sign Out")
    expect(page).to_not have_content("Sign In")

    click_link "Sign Out"
    expect(current_path).to eq(login_path)
    expect(page).to have_content("Sign In")
    expect(page).to have_content("Sign Up")
  end
end
