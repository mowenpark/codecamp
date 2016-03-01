# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

10.times do
  name = Faker::Company.name
  about = Faker::Lorem.paragraphs
  logo = Faker::Company.logo
  Company.create({name: name, about: about, logo: logo})
end

Company.all.each do |company|
  rand(1..2).times do
    location = "#{Faker::Address.city}, #{Faker::Address.state} (US)"
    title = Faker::Company.buzzword
    description = Faker::Lorem.paragraphs
    Program.create({
      title: title,
      description: description,
      location: location,
      company_id: company.id,
    })
  end
end

20.times do
  name = Faker::Name.name
  email = Faker::Internet.safe_email
  password = Faker::Internet.password(8)
  bio = Faker::Lorem.paragraphs
  location = "#{Faker::Address.city}, #{Faker::Address.state} (US)"
  User.create({
    name: name,
    email: email,
    password: password,
    location: location,
    bio: bio
  })
end

name = "Michael"
email = "mike@mail.com"
password = "mikemike"
bio = Faker::Lorem.paragraphs
location = "#{Faker::Address.city}, #{Faker::Address.state} (US)"
User.create({
  name: name,
  email: email,
  password: password,
  location: location,
  bio: bio
})

Program.all.each do |program|
  rand(1..5).times do
    user_id = rand(5)
    program_id = program.id
    title = Faker::Company.catch_phrase
    comments = Faker::Hacker.say_something_smart
    pros = Faker::Hipster.sentence
    cons = Faker::Hipster.sentence
    rating = rand(1..5)
    enrollment_status = true
    Review.create(
      title: title,
      comments: comments,
      program_id: program_id,
      user_id: user_id,
      pros: pros,
      enrollment_status: enrollment_status,
      cons: cons,
      rating: rating,
      )
  end
end
