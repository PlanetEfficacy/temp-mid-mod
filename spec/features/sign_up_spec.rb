require 'rails_helper'

RSpec.describe "user signs in" do

  def sign_up
    within "form" do
      click_link "Sign Up"
    end
    fill_in "Email", with: "email@example.com"
    fill_in "Password", with: "password"
    fill_in "Password confirmation", with: "password"
    click_button "Sign Up"
  end

  scenario "by entering email and password" do
    visit root_path
    sign_up

    expect(current_path).to eq(links_path)
    expect(page).to have_content("email@example.com")
    expect(page).to have_link("Logout")
  end

  context "email is not unique" do
    scenario "provides user with warning" do
      user = create :user, email: "email@example.com"
      visit root_path
      sign_up

      expect(current_path).to eq(new_user_path)
      expect(page).to have_content("There is already an account for that email.")
    end
  end


end
