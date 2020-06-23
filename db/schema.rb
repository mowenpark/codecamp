# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_17_035431) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "companies", force: :cascade do |t|
    t.string "name", null: false
    t.text "about", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "logo"
    t.string "locations", default: [], array: true
  end

  create_table "follows", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "program_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["program_id"], name: "index_follows_on_program_id"
    t.index ["user_id"], name: "index_follows_on_user_id"
  end

  create_table "languages", force: :cascade do |t|
    t.string "name", null: false
    t.integer "program_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["program_id"], name: "index_languages_on_program_id"
  end

  create_table "programs", force: :cascade do |t|
    t.string "title", null: false
    t.text "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "location", null: false
    t.integer "company_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "title", null: false
    t.text "pros", null: false
    t.integer "user_id", null: false
    t.integer "program_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "enrollment_status", null: false
    t.text "cons", null: false
    t.text "comments", null: false
    t.integer "rating", null: false
    t.index ["program_id"], name: "index_reviews_on_program_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "profile_pic", default: "http://res.cloudinary.com/dtdgkk9aa/image/upload/c_crop,h_180,w_180/v1456770578/820C3ABDED_mrrhma_yaui0w.jpg"
    t.text "bio", null: false
    t.string "location", null: false
    t.string "name", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

end
