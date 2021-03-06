require 'rails_helper'

describe "#get to /links", type: :request do
  it "returns all the user's links as json" do
    user = create :user, email: "bestemail@exampe.com"
    create_list :link, 2, user: user
    create :link
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    get "/api/v1/links"
    links = JSON.parse(response.body)

    expect(response).to be_success
    expect(links).to be_instance_of(Array)
    expect(links.count).to eq(2)
    links.each { |link| expect(link["user_id"]).to eq(user.id)}
  end

  it "returns a 400 if the user is not authorized" do
    get "/api/v1/links"
    expect(response.status).to eq(400)
  end
end
