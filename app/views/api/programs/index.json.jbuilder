json.array! @programs do |program|
  json.id program.id
  json.title program.title
  json.description program.description
  json.location program.location
  json.logo program.company.logo
end
