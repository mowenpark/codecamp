json.array! @reviews do |review|
  json.title review.title
  json.pros review.pros
  json.username review.user.name if review.user
  json.id review.user.id if review.user
  json.profile_pic review.user.profile_pic if review.user
  json.cons review.cons
  json.comments review.comments
  json.rating review.rating
  json.dateCreated review.created_at
end
