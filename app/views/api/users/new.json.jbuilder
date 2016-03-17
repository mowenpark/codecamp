json.id @user.id
json.name @user.name
json.location @user.location
json.bio @user.bio
json.profile_pic @user.profile_pic
json.reviews @user.reviews
json.feed do
  json.array! @feed do |feedItem|
    json.title feedItem.title
    json.company_id feedItem.company.id
    json.company_logo feedItem.company.logo
  end
end
json.following do
  json.array! @user.followings do |follow|
    json.title follow.title
    json.logo follow.company.logo
    json.id follow.company.id
  end
end
