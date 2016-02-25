# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

20.times do
  location = "#{Faker::Address.city}, #{Faker::Address.state} (US)"
  title = Faker::Company.name
  description = Faker::Lorem.paragraphs
  logo = Faker::Company.logo
  Program.create({
    title: title,
    description: description,
    location: location,
    logo: logo
    })
  end
