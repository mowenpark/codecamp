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

5.times do
  email = Faker::Internet.safe_email
  password = Faker::Internet.password(8)
  User.create({
    email: email,
    password: password
  })
end

Program.all.each do |program|
  rand(1..5).times do
    user_id = rand(5)
    program_id = program.id
    title = Faker::Company.catch_phrase
    comments = Faker::Hacker.say_something_smart
    pros = Faker::Hipster.sentence
    cons = Faker::Hipster.sentence
    rating = rand(1..5)
    employee_status = true
    Review.create(
      title: title,
      comments: comments,
      program_id: program_id,
      user_id: user_id,
      pros: pros,
      employee_status: employee_status,
      cons: cons,
      comments: comments,
      rating: rating,
      years_worked: 2)
  end
end
