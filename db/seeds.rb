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

Program.all.each do |program|
  rand(1..5).times do
    user_id = rand(20)
    program_id = program.id
    title = Faker::Hipster.sentence
    body = Faker::Hacker.say_something_smart
    Review.create(title: title, body: body, program_id: program_id, user_id: user_id)
  end
end
