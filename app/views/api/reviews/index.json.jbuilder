json.array! @reviews do |review|
  json.title review.title
  json.description review.body
end
