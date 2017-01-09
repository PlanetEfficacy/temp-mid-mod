require 'rails_helper'

RSpec.describe "user signs out" do
  scenario "and is redirected back to login screen" do
    user = create :user
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)
    visit links_path

    expect(page).to have_content("Sign Out")
    expect(page).to_not have_content("Sign In")

    click_link "Sign Out"

    expect(current_path).to eq(login_path)
  end
end
