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
    expect(page).to have_link("Sign Out")
  end

  context "email is not unique" do
    scenario "provides user with warning" do
      user = create :user, email: "email@example.com"
      visit root_path
      sign_up

      expect(current_path).to eq(new_user_path)
      expect(page).to have_content("Email has already been taken")
    end
  end

  context "passsword and confirmation do not match" do
    scenario "provides user with warning" do
      visit root_path
      within "form" do
        click_link "Sign Up"
      end
      fill_in "Email", with: "email@example.com"
      fill_in "Password", with: "password"
      fill_in "Password confirmation", with: "password1"
      click_button "Sign Up"

      expect(current_path).to eq(new_user_path)
      expect(page).to have_content("Password confirmation doesn't match Password")
    end
  end

  context "passsword and confirmation do not match and email is already taken" do
    scenario "provides user with warning" do
      user = create :user, email: "email@example.com"
      visit root_path
      within "form" do
        click_link "Sign Up"
      end
      fill_in "Email", with: "email@example.com"
      fill_in "Password", with: "password"
      fill_in "Password confirmation", with: "password1"
      click_button "Sign Up"

      expect(current_path).to eq(new_user_path)
      expect(page).to have_content("Password confirmation doesn't match Password")
      expect(page).to have_content("Email has already been taken")
    end
  end
end
