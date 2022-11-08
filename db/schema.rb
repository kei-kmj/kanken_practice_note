# frozen_string_literal: true

ActiveRecord::Schema[7.0].define(version: 20_221_107_074_054) do
  create_table 'answers', force: :cascade do |t|
    t.integer 'question_id'
    t.string 'answers'
    t.boolean 'correctness', default: false, null: false
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['question_id'], name: 'index_answers_on_question_id'
  end

  create_table 'categories', force: :cascade do |t|
    t.string 'name'
    t.string 'description'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  create_table 'questions', force: :cascade do |t|
    t.integer 'category_id'
    t.integer 'level'
    t.string 'questions'
    t.string 'note'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['category_id'], name: 'index_questions_on_category_id'
  end

  add_foreign_key 'answers', 'questions'
  add_foreign_key 'questions', 'categories'
end
