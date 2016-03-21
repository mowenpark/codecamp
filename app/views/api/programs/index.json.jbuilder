json.array! @programs do |program|
  json.id program.id
  json.title program.title
  json.description program.description
  json.location program.location
  json.logo program.company.logo
  json.languages program.languages
  if current_user
    json.followed program.followers.include?(current_user)
  else
    json.followed false
  end
end
