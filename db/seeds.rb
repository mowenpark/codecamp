# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Guest user

require 'csv'

csv_text = File.read('app/assets/bootcamps.csv')
csv = CSV.parse(csv_text, :headers => true)
csv.each do |row|
  hash_row = row.to_hash
  name = hash_row["name"].strip
  locations = hash_row["locations"].split(";").map { |location| location.strip }
  logo = hash_row["logo"].delete("\"")
  about = hash_row["about"].delete("\n").strip
  languages = hash_row["languages"].split(",").map { |location| location.strip }

  company = Company.create({name: name, about: about, logo: logo, locations: locations})
  company.locations.length.times do |i|
    location = company.locations[i]
    title = company.name
    description = company.about
    program = Program.create({
      title: title,
      description: description,
      location: location,
      company_id: company.id,
    })
    languages.each do |language|
      Language.create(
        name: language,
        program_id: program.id
      )
    end
  end
end

name = "Michael Park"
email = "mike@mail.com"
password = "mikemike"
bio = Faker::Lorem.paragraph
location = "#{Faker::Address.city}, #{Faker::Address.state} (US)"
User.create({
  name: name,
  email: email,
  password: password,
  location: location,
  bio: bio
})

20.times do
  name = Faker::Name.name
  email = Faker::Internet.safe_email
  password = Faker::Internet.password(8)
  profile_pic = Faker::Avatar.image(name, "144x144")
  bio = Faker::Lorem.paragraph
  location = "#{Faker::Address.city}, #{Faker::Address.state} (US)"
  User.create({
    name: name,
    email: email,
    password: password,
    location: location,
    profile_pic: profile_pic,
    bio: bio
  })
end

Program.all.each do |program|
  rand(1..5).times do
    user_id = User.all.sample.id

    Follow.create(
    user_id: user_id,
    program_id: program.id
    )

    title = Faker::StarWars.vehicle
    comments = Faker::Hacker.say_something_smart
    pros = Faker::Hipster.sentence
    cons = Faker::Hipster.sentence
    rating = rand(1..5)
    enrollment_status = true

    Review.create(
      title: title,
      comments: comments,
      program_id: program.id,
      user_id: user_id,
      pros: pros,
      enrollment_status: enrollment_status,
      cons: cons,
      rating: rating,
      )
  end
end
