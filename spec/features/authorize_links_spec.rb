require 'rails_helper'

RSpec.describe "guest visits links index" do
  scenario "and is redirected to login" do
    visit links_path
    expect(current_path).to eq(login_path)
  end
end
