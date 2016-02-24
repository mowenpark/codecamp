json.array! @programs do |program|
  json.title program.title
  json.description program.description
  json.location program.location
end
