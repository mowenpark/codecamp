json.array! @companies do |company|
  json.id company.id
  json.name company.name
  json.about company.about
  json.locations company.locations
  json.logo company.logo
  json.programs company.programs
end
