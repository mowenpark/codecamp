# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160302010644) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "companies", force: :cascade do |t|
    t.string   "name",                    null: false
    t.text     "about",                   null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.string   "logo"
    t.string   "locations",  default: [],              array: true
  end

  create_table "programs", force: :cascade do |t|
    t.string   "title",       null: false
    t.text     "description", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "location",    null: false
    t.integer  "company_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string   "title",             null: false
    t.text     "pros",              null: false
    t.integer  "user_id",           null: false
    t.integer  "program_id",        null: false
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.boolean  "enrollment_status", null: false
    t.text     "cons",              null: false
    t.text     "comments",          null: false
    t.integer  "rating",            null: false
  end

  add_index "reviews", ["program_id"], name: "index_reviews_on_program_id", using: :btree
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                                                                                                                                    null: false
    t.string   "password_digest",                                                                                                                          null: false
    t.string   "session_token",                                                                                                                            null: false
    t.datetime "created_at",                                                                                                                               null: false
    t.datetime "updated_at",                                                                                                                               null: false
    t.string   "profile_pic",     default: "http://res.cloudinary.com/dtdgkk9aa/image/upload/c_crop,h_180,w_180/v1456770578/820C3ABDED_mrrhma_yaui0w.jpg"
    t.text     "bio",                                                                                                                                      null: false
    t.string   "location",                                                                                                                                 null: false
    t.string   "name",                                                                                                                                     null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree

end
