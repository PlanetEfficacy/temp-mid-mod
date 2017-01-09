require 'rails_helper'

describe "#delete to /links/:id", type: :request do
  it "returns a success status" do
    user = create :user, email: "bestemail@exampe.com"
    create_list :link, 2, user: user
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    delete "/api/v1/links/#{Link.first.id}"

    expect(response).to be_success
    expect(user.links.count).to eq(1)
  end

  it "allows users to delete their own links" do
    user = create :user, email: "bestemail@example.com"
    link = create :link, user: user
    other_users_link = create :link
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    delete "/api/v1/links/#{other_users_link.id}"

    expect(response.status).to eq(404)
  end

  it "returns a 400 if the user is not authorized" do
    link = create :link
    delete "/api/v1/links/#{link.id}"
    expect(response.status).to eq(400)
  end
end
