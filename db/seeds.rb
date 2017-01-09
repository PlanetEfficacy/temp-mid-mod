# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
user = User.find_by(email: "jspevack@gmail.com")

user_2 = User.create(email: "me@example.com", password: "password")

12.times do |i|
  user.links.find_or_create_by(title: "My Link #{i}",
                    url: "http://www.example.com/#{i}",
                    read: i.even?)
end

2.times do |i|
  user_2.links.find_or_create_by(title: "My Link #{i}",
                    url: "http://www.example.com/#{i}",
                    read: i.even?)
end
