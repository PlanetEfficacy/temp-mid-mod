require 'rails_helper'

describe "#post to /links", type: :request do
  let (:user) { create :user }
  let (:link) { create :link, user: user }


  it "returns the updated link as json" do
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)

    patch "/api/v1/links/#{link.id}", link: { title: "Best link ever", url: "http://www.google.com", read: true }
    updated_link = JSON.parse(response.body)

    expect(response).to be_success
    expect(updated_link).to be_instance_of(Hash)
    expect(updated_link["id"]).to eq(link.id)
    expect(updated_link["title"]).to eq("Best link ever")
    expect(updated_link["url"]).to eq("http://www.google.com")
    expect(updated_link["read"]).to eq(true)
  end

  it "returns a 400 if the user is not authorized" do
    post "/api/v1/links", link: { title: "Great Link", url: "http://www.google.com" }
    expect(response.status).to eq(400)
  end
end
