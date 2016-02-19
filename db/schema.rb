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

ActiveRecord::Schema.define(version: 20160219000036) do

  create_table "identities", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "provider"
    t.string   "uid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "identities", ["user_id"], name: "index_identities_on_user_id"

  create_table "inscricao_minicursos", force: :cascade do |t|
    t.integer  "inscricao_id"
    t.integer  "minicurso_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "inscricoes", force: :cascade do |t|
    t.boolean  "paga"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
    t.integer  "pacote_id"
    t.string   "tamanho_camisa"
    t.integer  "technical_visit_id"
    t.integer  "status"
    t.datetime "started_at"
    t.integer  "lote"
  end

  add_index "inscricoes", ["pacote_id"], name: "index_inscricoes_on_pacote_id"
  add_index "inscricoes", ["technical_visit_id"], name: "index_inscricoes_on_technical_visit_id"
  add_index "inscricoes", ["user_id"], name: "index_inscricoes_on_user_id"

  create_table "minicursos", force: :cascade do |t|
    t.string   "name"
    t.datetime "start_at"
    t.datetime "finish_at"
    t.integer  "total_qtd"
    t.integer  "available_qtd"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "short_name"
    t.integer  "numero_id"
  end

  create_table "pacotes", force: :cascade do |t|
    t.string   "nome",            null: false
    t.text     "descricao",       null: false
    t.decimal  "valor_lote_1"
    t.decimal  "valor_lote_2"
    t.decimal  "valor_lote_3"
    t.integer  "qtd_lote_1"
    t.integer  "qtd_lote_2"
    t.integer  "qtd_lote_3"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "numero_id"
    t.integer  "available_qtd_1"
    t.integer  "available_qtd_2"
    t.integer  "available_qtd_3"
  end

  create_table "technical_visits", force: :cascade do |t|
    t.string   "name"
    t.datetime "start_at"
    t.datetime "finish_at"
    t.integer  "total_qtd"
    t.integer  "available_qtd"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "numero_id"
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.datetime "birth_at"
    t.string   "sexo"
    t.string   "phone_number"
    t.boolean  "admin"
    t.string   "cpf"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "university"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
