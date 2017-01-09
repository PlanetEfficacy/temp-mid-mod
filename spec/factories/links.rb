FactoryGirl.define do
  factory :link do
    url "http://www.google.com"
    title "Best link ever"
    read false
    user
  end
end
