json.array! @reviews do |review|
  json.title review.title
  json.body review.body
  json.user review.user
end
